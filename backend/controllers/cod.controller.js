const CodLead = require("../models/codLead.model");
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

// One sheet can handle both purchase + sale (e.g. "MIMS COD Sale/Purchase").
const combinedSheetId = process.env.COD_SALE_PURCHASE_SHEET_ID || "";

const sheetIds = {
  purchase: process.env.COD_PURCHASE_SHEET_ID || combinedSheetId,
  sale: process.env.COD_SALES_SHEET_ID || combinedSheetId,
  new_vehicle: process.env.COD_NEW_VEHICLE_SHEET_ID || "",
};

function normalizeCodType(type) {
  if (type === "sales") return "sale";
  return type;
}

function sheetTypeLabel(type) {
  if (type === "purchase") return "purchase";
  if (type === "sale") return "sale";
  return "new_vehicle";
}

exports.createCodLead = async (req, res) => {
  try {
    const { type: rawType, name, phone, location, vehicle, message } = req.body;
    const type = normalizeCodType(rawType);

    if (!["purchase", "sale", "new_vehicle"].includes(type)) {
      return res.status(400).json({ msg: "Invalid COD request type" });
    }

    const lead = await CodLead.create({
      type,
      name,
      phone,
      location,
      vehicle,
      message,
    });

    // Optional Google Sheet sync: failures should not block API success.
    try {
      const spreadsheetId = sheetIds[type];
      if (spreadsheetId) {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: "v4", auth: client });

        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: "Sheet1!A:G",
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [[
              sheetTypeLabel(type),
              name || "",
              phone || "",
              location || "",
              vehicle || "",
              message || "",
              formatISTDateTime(),
            ]],
          },
        });
      }
    } catch (sheetErr) {
      console.error(`Google Sheets (cod:${type}) failed:`, sheetErr.message);
    }

    res.json({ msg: "COD lead saved ✅", data: lead });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};
