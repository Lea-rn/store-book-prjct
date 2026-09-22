const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const getBookController = require("../controllers/bookController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/uploads");
  },
  filename: (req, file, cb) => {
    console.log("file", file);
    let ext = path.extname(file.originalname); //==> .png // .jfif // .jpg

    if (ext === ".jfif") {
      ext = ".jpg"; //// 5.jpg
    }

    cb(null, Date.now() + ext);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("only images are allowed"), false);
  }
};

///

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 2, //  2097152 bytes ~ 2mb
  },
});

router.get("/ourbooks", getBookController.getAllBooks);
router.get("/three", getBookController.getThreeBooks);
router.get("/bookdetails/:id", getBookController.getOneBookDetails);
router.post("/add", upload.single("image"), getBookController.addBook);
router.get("/edit/:id", getBookController.getEditForm);
router.post(
  "/update/:id",
  upload.single("image"),
  getBookController.updateBook,
);

module.exports = router;

///// mimeType :
//// photo.jpg ==> image/jpeg ; photo.png ==> image/png ;
///// photo.webp ==> image/webp ;

//// document.pdf ==> application/pdf ; video.mp4 ==> video/mp4
