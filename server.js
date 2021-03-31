const cors = require("cors");
const bodyParser = require("body-parser");
const express = require('express');
require('dotenv').config()
config = require("./config");

var server = express();

const corsOptions = {
  origins: ["*"],
  allowHeaders: ["Content-Type", "Content-Length", "Authorization"],
};
server.use(cors(corsOptions));
server.use(require("morgan")("dev"));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.listen(config.serverSettings.port, () => {
  console.log(`---${config.name} Service ---`);
  console.log(`Connecting to ${config.name} repository...`);

  require("./routes")(server);
});

process.on("SIGINT", () => {
  process.exit(0);
});
process.on("SIGTERM", () => {
  console.log(`Closing ${config.name} Service.`);
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log("Server closed.");

  });
});

module.exports = server;
