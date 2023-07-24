const express = require("express");

const router = express.Router();

const todosController = require("../controllers/todos-controllers");

// 로그인 상태로 메인 페이지 들어갈 때
// 서버에 데이터가 요청되는 경우는 로그인한 유저가 데이터를 동기화할 때만
router.get("/", todosController.getTodos);
