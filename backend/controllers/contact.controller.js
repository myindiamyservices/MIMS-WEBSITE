const Contact = require("../models/contact.model");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const localKeyFile = path.join(__dirname, "../config/google.json");
const keyFile =
  process.env.GOOGLE_KEY_FILE ||
  (fs.existsSync("/etc/secrets/google.json")
    ? "/etc/secrets/google.json"
    : localKeyFile);

const auth = new google.auth.GoogleAuth({
  keyFile,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const formatISTDateTime = () =>
  new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "short",
    timeStyle: "medium",
  }).format(new Date());

exports.createContact = async (req, res) => {
  try {
    const data = req.body;

    // ✅ MongoDB
    const contact = await Contact.create(data);

    // ✅ Google Sheet — optional; failure must not block Mongo save
    try {
      const client = await auth.getClient();
      const sheets = google.sheets({ version: "v4", auth: client });

      await sheets.spreadsheets.values.append({
        spreadsheetId: "1DPpIMRCzoTaJLU6l-pARxj41YwMb5s6CuHCN2iO_KuY",
        range: "Sheet1!A:F",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[
            data.name,
            data.email,
            data.phone,
            data.organisation,
            data.message,
            formatISTDateTime()
          ]],
        },
      });
    } catch (sheetErr) {
      console.error("Google Sheets (contact) failed:", sheetErr.message);
    }

    res.json({ msg: "Contact saved ✅", data: contact });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};