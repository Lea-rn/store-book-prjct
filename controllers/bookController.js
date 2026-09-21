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

/////// add books ::
exports.addBook = async (req, res) => {
  try {
    const { title, description, price, author } = req.body;

    const newBook = new Book({
      title,
      description,
      price,
      author,
      image: req.file ? req.file.filename : null,
    });

    req.flash("success_msg", "book added successfully !!! ");
    res.redirect("/addbooks");

    await newBook.save();
  } catch (err) {
    req.flash("error-msg", "book not added  !!! ");
    res.redirect("/addbooks");
  }
};
