const mongoose = require("mongoose");

const Todo = require("./models/todo");

mongoose
  .connect(
    "mongodb+srv://yeji:2hjVyV4dZFa2Ukxz@willing-db.ppf64bo.mongodb.net/todos_test?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database!"))
  .catch(() => console.log("Connection failed..."));

const createTodo = async (req, res, next) => {
  const newTodo = new Todo({
    text: req.body.text,
    isDone: req.body.isDone,
    groupId: req.body.groupId,
    dueDate: req.body.dueDate,
    createDate: req.body.createDate,
  });

  const result = await newTodo.save();

  res.json(result);
};

const getTodos = async (req, res, next) => {
  const todos = await Todo.find().exec();
  res.json(todos);
};

exports.createTodo = createTodo;
exports.getTodos = getTodos;
