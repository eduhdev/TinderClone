const express = require("express");
const DevController = require("./controllers/DevController");

const routes = express.Router();

routes.post("/devs", DevController.store);

routes.get("/", (req, res) => {
  return res.send("Hello babaca");
});

module.exports = routes;
