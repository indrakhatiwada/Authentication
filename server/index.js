const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const middlewares = require("./middleware");
// const bcrypt = require("bcrypt");

const app = express();

app.use(morgan("common"));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "its working",
  });
});

const PORT = process.env.PORT || 1337;

//error handlers

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
