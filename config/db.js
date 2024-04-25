const mongoose = require("mongoose");
const { dbUrl } = require("./config");
const chalk = require("chalk");

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log(chalk.bgBlueBright("DB is Connected"));
  })
  .catch((error) => {
    console.log(chalk.green(error.message));
    process.exit(1);
  });
