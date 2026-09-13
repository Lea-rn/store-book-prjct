const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res) => {
  try {
    const results = await Book.find({});
    console.log("reasults :", results);
    res.render("books", { results });
  } catch (err) {
    console.log(err);
  }
};

exports.getThreeBooks = async (req, res) => {
  try {
    const threeBooks = await Book.find({}).limit(3);
    console.log("three books :", threeBooks);
    res.render("index", { threeBooks });
  } catch (err) {
    console.log(err);
  }
};
