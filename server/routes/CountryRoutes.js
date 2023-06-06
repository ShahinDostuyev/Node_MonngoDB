const express = require("express");
const { CountryController } = require("../controllers/CountryController");
// const { body } = require("express-validator");
// const { validate } = require('../middleware/validation');
const CountryRoutes = express.Router();

CountryRoutes.get("/", CountryController.getAll);
CountryRoutes.get("/:id", CountryController.getById);
CountryRoutes.post("/", CountryController.add);
CountryRoutes.delete("/:id", CountryController.deleteById);

module.exports = {
  CountryRoutes,
};
