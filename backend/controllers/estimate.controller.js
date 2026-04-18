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
    const vehicle = data.vehicle || data.model || "";

    // 🔹 MongoDB save (always required)
    const estimate = await Estimate.create({
      name: data.name,
      phone: data.phone,
      location: data.location,
      vehicle,
    });

    // 🔥 Google Sheet — optional; failure must not block Mongo save
    try {
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
            vehicle,
            data.location,
            data.category,
            new Date().toLocaleString()
          ]],
        },
      });
    } catch (sheetErr) {
      console.error("Google Sheets (estimate) failed:", sheetErr.message);
    }

    res.json({
      msg: "Saved to DB + Sheet ✅",
      data: estimate,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};