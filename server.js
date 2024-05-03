const chalk = require("chalk");
const app = require("./app");
const cloudinary = require("cloudinary");
const { cloudName, apiKey, apiSecret } = require("./config/config");

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

app.listen(4242, () => {
  console.log(chalk.bgYellow("server is running at port 4242"));
});
