const express = require("express");
const Joi = require("joi");
//create routers

const db = require("../db/connection");

const users = db.get("users");

users.index("username");

const schema = Joi.object().keys({
  username: Joi.string().alphanum().min(2).max(12).required(),
  password: Joi.string().min(6).required(),
});
const router = express.Router();

router.get("/", (req, res) => {
  const result = Joi.validate(req.body, schema);

  res.json({
    message: "auth is working",
  });
});

router.post("/signup", (req, res) => {
  console.log(req.body);
  res.json({
    message: "signup ",
  });
});

module.exports = router;
