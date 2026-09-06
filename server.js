const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "assets")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/books", (req, res) => {
  res.render("books");
});

app.listen(4000, () => console.log("server run on port 4000 !! "));
