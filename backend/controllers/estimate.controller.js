const Estimate = require("../models/estimate.model");
const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "config/google.json",
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
      spreadsheetId: "1Y8x93yN0yckPFv-tkmwWvW29q3WAWhsFrdKREOmQOVg",
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