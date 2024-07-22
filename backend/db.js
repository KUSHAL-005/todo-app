const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  complete: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo: todo,
};
