const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    require: true,
    default: "player",
  },
  todo: {
    type: Array,
    default: [],
  },
});

// STATIC SIGNUP METHOD
userSchema.statics.signup = async function (username, password) {
  if (!username || !password) {
    throw Error("Username and password must be filled");
  }
  const user = await this.findOne({ username });
  if (user) {
    throw Error("Username has already been taken");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await this.create({ username, password: hashedPassword });
  return newUser;
};

//STATIC LOGIN METHOD
userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("Username and password must be filled");
  }
  const user = await this.findOne({ username });
  if (!user) {
    throw Error("Username does not exist");
  }
  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    throw Error("Username and password do not match");
  }
  return user;
};

module.exports = mongoose.model("Users", userSchema);
