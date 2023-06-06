const { Writer } = require("../models/Writer");

const WriterController = {
  getAll: (req, res) => {
    Writer.find()
      .limit(10)
      .populate("country")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    const id = req.params.id;
    Writer.findById(id)
      .populate("country")
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
    const writer = new Writer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDate: req.body.birthDate,
      country: req.body.country,
      addDate: req.body.addDate,
    });
    writer.save();
    res.json(writer);
  },
  delete: (req, res) => {
    const id = req.params.id;
    Writer.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = {
  WriterController,
};
