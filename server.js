const express = require("express");

const path = require("path");

const connectDb = require("./config/db.js");
const bookRoutes = require("./routes/bookRoutes.js");
const app = express();
connectDb();

app.use(express.static(path.join(__dirname, "assets")));
app.set("view engine", "ejs");

app.use("/ourBooks", bookRoutes);

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

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(4000, () => console.log("server run on port 4000 !! "));
