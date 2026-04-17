const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Register
exports.register = async (req, res) => {
  try {
    const { name, phone, password } = req.body;

    if (!name || !phone || !password) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const exists = await User.findOne({ phone });
    if (exists) return res.status(400).json({ msg: "User exists" });

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      phone,
      password: hash,
    });

    res.json({
      msg: "Registered",
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: "Wrong password" });

    res.json({
      msg: "Login success",
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
