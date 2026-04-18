const Estimate = require("../models/estimate.model");
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

exports.createEstimate = async (req, res) => {
  try {
    const data = req.body;

    // 🔹 MongoDB save
    const estimate = await Estimate.create(data);

    // 🔥 Google Sheet add (YAHAN ADD KIYA)
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: "1DuUdeF87vmX3wlgzMVBrhP6GEeqkJT5u3xQrnFrwlkY",
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[
          data.name,
          data.phone,
          data.vehicle,
          data.location,
          data.category,
          new Date().toLocaleString()
        ]],
      },
    });

    // 🔹 response
    res.json({
      msg: "Saved to DB + Sheet ✅",
      data: estimate,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};