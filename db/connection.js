const mongoose = require("mongoose");
const config = require("../common/config");

const connectToMongo = () => {
  mongoose
    .connect(config.dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db connected"));
};

module.exports = connectToMongo;
