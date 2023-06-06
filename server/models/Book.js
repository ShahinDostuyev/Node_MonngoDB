const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  description: String,
  publishDate: { type: Date, default: Date.now },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Writer",
  },
  addDate: { type: Date, default: Date.now },
  // imagePath: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = {
  Book,
};
