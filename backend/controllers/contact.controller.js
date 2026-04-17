const Contact = require("../models/contact.model");
const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "config/google.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

exports.createContact = async (req, res) => {
  try {
    const data = req.body;

    // ✅ MongoDB
    const contact = await Contact.create(data);

    // ✅ Google Sheet
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: "170uepVwqAdeDZGbvOc2l1b8uPw3J8zyEOBxK222Cxe4",
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[
          data.name,
          data.email,
          data.phone,
          data.organisation,
          data.message,
          new Date().toLocaleString()
        ]],
      },
    });

    res.json({ msg: "Contact saved ✅", data: contact });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};