const express = require("express");
const router = express.Router();
//joi schemas
const schema = require("../middlewares/payload-validator/joi-schemas");
//joi schema validator
const validate = require("../middlewares/payload-validator/joi-schema-validator");
const bookManagementDal = require("../components/books-management");

const catchError = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

router.post(
  "/add-new-book",
  validate(schema.addNewBook),
  catchError(bookManagementDal.addNewBook)
);
router.get("/get-all-books", catchError(bookManagementDal.getAllBooksData));
router.get("/get-book/:bookId",
  catchError(bookManagementDal.getBookById)
);
router.put("/update-book",
  validate(schema.updateBook),
  catchError(bookManagementDal.updateBookData)
);
router.delete("/delete-book/:bookId",
  catchError(bookManagementDal.deleteBookData)
);


module.exports = router;
