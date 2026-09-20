const router = require("express").Router();

const getBookController = require("../controllers/bookController");

router.get("/ourbooks", getBookController.getAllBooks);
router.get("/three", getBookController.getThreeBooks);
router.get("/bookdetails/:id", getBookController.getOneBookDetails);

module.exports = router;
