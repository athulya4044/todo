const express = require("express");
const router = express.Router();
const todoController = require("../controller/Todo");

// Create a new todo
router.post("/", todoController.create);
// Retrieve all todos
router.get("/", todoController.findAll);
// Retrieve a single todo by id
router.get("/:id", todoController.findOne);
// Update a todo by id
router.put("/:id", todoController.update);
// Delete a todo by id
router.delete("/:id", todoController.destroy);

module.exports = router;
