import {Router} from "express";
import * as booksCtrl from "../controllers/books.controller";
import { authJwt } from '../middlewares'
const router = Router();


router.post("/", [authJwt.verifyToken, authJwt.isModerator ],booksCtrl.createBook)

router.get("/", booksCtrl.getBooks)

router.get("/:bookId", booksCtrl.getBookById)

router.put("/:bookId", [authJwt.verifyToken, authJwt.isAdmin ], booksCtrl.updateBookById)

router.delete("/:bookId", [authJwt.verifyToken, authJwt.isAdmin ], booksCtrl.deleteBooksById)

export default router;