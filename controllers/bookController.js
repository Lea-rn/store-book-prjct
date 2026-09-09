const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res) => {
  try {
    const results = await Book.find({});
    console.log("books :", results);
  } catch (err) {
    console.log(err);
  }
};
