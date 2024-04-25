require("dotenv").config();

const configData = {
  dbUrl: process.env.DB_URL,
};

module.exports = configData;
