const express = require("express");
const app = express();
const mongoDB = require("./database/mongo");

app.use(express.json());

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.post("/todos", mongoDB.createTodo);

app.get("/todos", mongoDB.getTodos);

app.listen(5000, () => console.log("Server is running at 5000 ✨"));
