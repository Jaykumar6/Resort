const express = require("express");
const app = express();
const db = require("./db");
const bodyparser = require("body-parser");
require ('dotenv').config();

app.use(bodyparser.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Good Morning Jay");
});

const formRouter = require("./routers/form");
const travelrouter = require("./routers/travel");
app.use("/form", formRouter);
app.use("/trip", travelrouter);

app.listen(PORT, () => {
  console.log("server is Running on a port 3000");
});
