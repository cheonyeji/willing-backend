const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://yeji:2hjVyV4dZFa2Ukxz@willing-db.ppf64bo.mongodb.net/?retryWrites=true&w=majority";

const createTodo = async (req, res, next) => {
  const newTodo = {
    text: req.body.text,
    id: req.body.id,
    isDone: req.body.isDone,
    groupId: req.body.groupId,
    dueDate: req.body.dueDate,
    createDate: req.body.createDate,
  };
  const client = new MongoClient(url);

  try {
    const db = client.db("todos_test");
    const todos_collection = db.collection("todos");
    const result = await todos_collection.insertOne(newTodo);
  } catch (error) {
    return res.json({ message: "Fail to store data." });
  }

  client.close();
  res.json(newTodo);
};

const getTodos = async (req, res, next) => {
  const client = new MongoClient(url);
  let todos;
  try {
    const db = client.db("todos_test");
    const todos_collection = db.collection("todos");
    todos = await todos_collection.find().toArray();
  } catch (error) {
    return res.json({ message: "Fail to retrieve data." });
  }

  client.close();
  res.json(todos);
};

exports.createTodo = createTodo;
exports.getTodos = getTodos;
