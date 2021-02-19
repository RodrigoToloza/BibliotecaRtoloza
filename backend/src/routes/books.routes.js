import {Router} from "express";
import * as booksCtrl from "../controllers/books.controller";

const router = Router();


router.post("/", booksCtrl.createBook)

router.get("/", booksCtrl.getBooks)

router.get("/:bookId", booksCtrl.getBookById)

router.put("/:bookId", booksCtrl.updateBookById)

router.delete("/:bookId", booksCtrl.deleteBooksById)

export default router;