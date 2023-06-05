const { Book } = require("../models/Book");

const BookController = {
  getAll: (req, res) => {
    Book.find()
      .limit(10)
      .populate("writer")

      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Book.findById(id)
      .populate("writer")
      .then((data) => {
        if (data) {
          res.json(data);
        } else {
          res.status(404).json({ msg: "Not found!" });
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  add: (req, res) => {
    const book = new Book({
      name: req.body.name,
      description: req.body.description,
      publishDate: req.body.publishDate,
      writer: req.body.writer,
      addDate: req.body.addDate,
    });
    book.save();
    res.json(book);
  },
  deleteById: (req, res) => {
    const id = req.params.id;
    Book.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = {
  BookController,
};
