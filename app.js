const express = require("express");
const router = require("./router/volunterRoute");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { initializeApp, cert } = require("firebase-admin/app");
const credentials = require("./config/key.json");

require("./config/db");
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(cors());

const firebaseConfig = {
  apiKey: "AIzaSyCv0gW6rexaAt1RRLQ3NQF_1svbwmZGwN4",
  authDomain: "volunter-dcf97.firebaseapp.com",
  projectId: "volunter-dcf97",
  storageBucket: "volunter-dcf97.appspot.com",
  messagingSenderId: "20889548926",
  appId: "1:20889548926:web:7f59c0fc6b15c0ccda802f",
};

initializeApp({
  credential: cert(credentials),
});

app.use("/api/v1", router);

module.exports = app;
