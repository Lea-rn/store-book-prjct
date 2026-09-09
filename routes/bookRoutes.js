const router = require("express").Router();

const getBookController = require("../controllers/bookController");

router.get("/all", getBookController.getAllBooks);

module.exports = router;
