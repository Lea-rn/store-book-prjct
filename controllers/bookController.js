const Book = require("../models/bookModel");

///// get all books ::
exports.getAllBooks = async (req, res) => {
  try {
    const results = await Book.find({});
    // console.log("reasults :", results);
    res.render("books", { results });
  } catch (err) {
    console.log(err);
  }
};

///// get three books ::
exports.getThreeBooks = async (req, res) => {
  try {
    const threeBooks = await Book.find({}).limit(3);
    // console.log("three books :", threeBooks);
    res.render("index", { threeBooks });
  } catch (err) {
    console.log(err);
  }
};

//// book details :::

exports.getOneBookDetails = async (req, res) => {
  try {
    // console.log("id Received :", req.params.id);
    const bookDetails = await Book.findById(req.params.id);
    console.log(bookDetails);
    if (!bookDetails) {
      return res.status(404).send("book not found");
    }
    res.render("details", { bookDetails });
  } catch (err) {
    console.log(err);
  }
};
