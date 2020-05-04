const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const config = require("./common/config");
const connectToMongo = require("./db/connection");
const routes = require("./api/routes");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/", routes);

app.listen(config.port, () => {
  console.log("Server started on port " + config.port);
});
