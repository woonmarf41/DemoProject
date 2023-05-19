const router = require("express").Router();
const { requireRole } = require("../middlewares/requireAuth");
const usersController = require("../controllers/usersController");

// router.use(requireRole);

// GET ALL USERS
router.get("/", usersController.getUsers);

// GET USER BY ID
router.get("/:id", usersController.getUserById);

// CREATE USER
router.post("/", usersController.createUser);

// DELETE A USER BY ID
router.delete("/:id", usersController.deleteUser);

// UPDATE A USER
router.put("/:id", usersController.updateUser);

// TODO
router.get("/:id/todo", usersController.getTodo);

// CREATE TODO
router.post("/:id/create_todo", usersController.createTodo);

// DELETE TODO
router.delete("/:id/todo_:index", usersController.deleteTodo);

module.exports = router;
