const { Book } = require("../models/Book");
const { v4: uuidv4 } = require("uuid");
var fs = require("fs");

const BookController = {
  getAll: (req, res) => {
    Book.find()
      .limit(10)
      .populate({
        path: "writer",
        populate: { path: "country" },
      })
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
    // console.log("Files from request: ", req.files);
    // const file = req.files.photo;

    // const extension = file.name.substring(file.name.lastIndexOf("."));
    // const path = __dirname + "../photos" + uuidv4() + extension;

    // file.mv(path, function (err) {
    //   if (!err) {
    //     res.send("Success!!");
    //   } else {
    //     res.status(500).json(err);
    //   }
    // });
    const book = new Book({
      name: req.body.name,
      description: req.body.description,
      publishDate: req.body.publishDate,
      // imagePath: path,
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
        // fs.unlink(data.imagePath, function (err) {
        //   if (!err) {
        //     console.log("Book data is updated successfully!");
        //   } else {
        //     console.log("Error occured:", err);
        //   }
        // });

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
