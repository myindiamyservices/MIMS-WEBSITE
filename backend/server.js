require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

// DEBUG
console.log("MONGO_URI:", process.env.MONGO_URI);

// DATABASE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// ROUTES
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/estimate", require("./routes/estimate.routes"));
app.use("/api/callback", require("./routes/callback.routes"));
app.use("/api/contact", require("./routes/contact.routes"));


// TEST
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// 404
app.use((req, res) => {
  res.status(404).json({ msg: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});