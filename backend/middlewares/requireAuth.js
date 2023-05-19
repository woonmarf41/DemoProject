require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports.requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.send({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = await User.findOne({ id }).select("_id");
    next();
  } catch (error) {
    res.send({ error: "Request is not authorized" });
  }
};

module.exports.requireRole = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.send({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    const user = await User.findOne({ _id: decoded.id });
    if (authorization && user.role === "admin") {
      next();
    } else {
      res.send({ error: "Accessed Denied" });
    }
  } catch (error) {
    res.send({ error: "Authorization token required" });
  }
};
