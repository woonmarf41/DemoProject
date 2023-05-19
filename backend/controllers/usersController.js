const User = require("../models/User");
const bcrypt = require("bcrypt");

// GET ALL USERS
module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send({ error: "Error retrieving users data" });
  }
};

// GET USER BY ID
module.exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.send(user);
  } catch (error) {
    res.send({ error: "Error retrieving user data" });
  }
};

// CREATE USER
module.exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      username: req.body.username,
      password: hashedPassword,
      role: req.body.role,
    });
    res.send(`Successfully created a user`);
  } catch (error) {
    res.send({ error: "Error creating user" });
  }
};

// DELETE USER BY ID
module.exports.deleteUser = async (req, res) => {
  console.log("delete trigger");
  try {
    const id = req.params.id;
    console.log(id);
    await User.findByIdAndDelete(id);
    res.send("Successfully deleted the user");
  } catch (error) {
    res.send({ error: "Error deleting the user data" });
  }
};

// UPDATE USER
module.exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await User.findByIdAndUpdate(id, {
      username: req.body.username,
      password: hashedPassword,
      role: req.body.role,
    });
    res.send(`Successfully update user`);
  } catch (error) {
    res.send({ error: "Error Updating the user data" });
  }
};

// GET TODO
module.exports.getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.find({ _id: id }, "todo -_id");
    const todo = data[0].todo;
    res.send(todo);
  } catch (error) {
    res.send({ error: error });
  }
};

module.exports.createTodo = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          todo: {
            task: req.body.task,
          },
        },
      }
    );
    res.send("successfull!");
  } catch (error) {
    res.send({ error: error });
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const index = req.params.index;
    const data = await User.find({ _id: id }, "todo -_id");
    const todo = data[0].todo;

    const element = await User.find({ "todo.0.task": "washing clothes " });
    console.log(element);

    console.log("first");
    res.send(todo);
  } catch (error) {
    console.log(error);
  }
};
