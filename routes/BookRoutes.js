const express = require("express");
const { BookController } = require("../controllers/BookController");
const { body } = require("express-validator");
// const { validate } = require('../middleware/validation');
const BookRoutes = express.Router();

BookRoutes.get("/", BookController.getAll);
BookRoutes.get("/:id", BookController.getById);
BookRoutes.post("/", BookController.add);
BookRoutes.delete("/:id", BookController.deleteById);

module.exports = {
  BookRoutes,
};
