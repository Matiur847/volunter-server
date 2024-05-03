require("dotenv").config();

const configData = {
  dbUrl: process.env.DB_URL,
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
};

module.exports = configData;
