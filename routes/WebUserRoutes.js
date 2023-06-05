const express = require("express");
const { WebUserController } = require("../controllers/WebUserController");
const { body } = require('express-validator');
const { validate } = require('../middleware/validation');
const WebUserRoutes = express.Router();

WebUserRoutes.get("/", WebUserController.getAll);
WebUserRoutes.get("/:id", WebUserController.getById);
WebUserRoutes.post(
  "/",
  body("name").notEmpty().withMessage("Name part should not be empty!"),
  validate,
  WebUserController.add
);
WebUserRoutes.delete("/:id", WebUserController.deleteById);
WebUserRoutes.put("/:id", WebUserController.update);

module.exports = {
  WebUserRoutes,
};
