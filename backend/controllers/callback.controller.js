const Callback = require("../models/callback.model");
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

exports.createCallback = async (req, res) => {
  try {
    const data = req.body;

    // 🔹 MongoDB save
    const callback = await Callback.create(data);

    // 🔥 Google Sheet (ALAG SHEET ID USE KAR)
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: "1nhTyATNqjwjoRWWGt2kpaInP2jF7mk-MmxP_oXTEo_E",
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[
          data.name,
          data.phone,
          data.location,
          data.description,
          new Date().toLocaleString()
        ]],
      },
    });

    res.json({
      msg: "Callback saved ✅",
      data: callback,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};