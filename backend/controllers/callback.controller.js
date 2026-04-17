const Callback = require("../models/callback.model");
const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "config/google.json",
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
      spreadsheetId: "1nQq5SjTj_qWolqys9sJUZ_5viJsszzR-B7ebWJ486As",
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