const express = require("express");
const { WriterController } = require("../controllers/WriterController");
const { body } = require("express-validator");
// const { validate } = require('../middleware/validation');
const WriterRoutes = express.Router();

WriterRoutes.get("/", WriterController.getAll);
WriterRoutes.get("/:id", WriterController.getById);
WriterRoutes.post("/", WriterController.add);
WriterRoutes.delete("/:id", WriterController.delete);

module.exports = {
  WriterRoutes,
};
