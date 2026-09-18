const express = require("express");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");

const connectDb = require("./config/db.js");

const app = express();
connectDb();

const bookRoutes = require("./routes/bookRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "my secret key ",
    resave: true,
    saveUninitialized: false,
  }),
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.error = req.flash("error-msg"); /// value || null
  next();
});

app.use("/", bookRoutes);
app.use("/", userRoutes);

app.get("/three", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/ourbooks", (req, res) => {
  res.render("books");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(4000, () => console.log("server run on port 4000 !! "));
