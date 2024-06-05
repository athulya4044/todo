var mongoose = require("mongoose");


var todoTaskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
    default: "Low",
  },
  dueDate: {
    type: Date,
  },
});

var todo = mongoose.model("Todo", todoTaskSchema);

module.exports = todo;
