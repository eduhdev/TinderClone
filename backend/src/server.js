const express = require("express");
const mongoose = require("mongoose");
const mongooseKey = require("../credentials/universal_key.json").key;

const routes = require("./routes");

const server = express();

mongoose.connect(
  `mongodb+srv://eduhdev:${mongooseKey}@cluster0-hsic3.mongodb.net/tindev?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

server.use(express.json);
server.use(routes);

server.listen(3333);
