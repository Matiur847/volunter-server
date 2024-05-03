const express = require("express");
const router = require("./router/volunterRoute");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./config/db");
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1", router);

module.exports = app;
