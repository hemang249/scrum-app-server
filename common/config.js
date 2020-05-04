const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: parseInt(process.env.PORT),
  dbUrl: process.env.MONGO_URI,
};
