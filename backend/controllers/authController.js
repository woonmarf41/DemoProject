const User = require("../models/User");
const jwt = require("jsonwebtoken");

const SECRET_TOKEN = process.env.SECRET_TOKEN;

const createToken = (id) => jwt.sign({ id }, SECRET_TOKEN, { expiresIn: "7h" });

module.exports.signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.signup(username, password);
    const token = createToken(user.id);

    res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    const token = createToken(user.id);

    res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
