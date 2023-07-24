const express = require("express");

const router = express.Router();

const usersControllers = require("../controllers/users-controllers");

// 가입
router.post("/signup", usersControllers.signup);

// 로그인
router.post("/login", usersControllers.login);

// 회원정보 수정 (닉네임/아이콘 등)
router.post("/update/:uid", usersControllers.update);
