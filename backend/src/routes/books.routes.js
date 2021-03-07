import {Router} from "express";
import * as booksCtrl from "../controllers/books.controller";
import { authJwt } from '../middlewares'
const router = Router();


router.post("/", [authJwt.verifyToken, authJwt.isModerator ],booksCtrl.createBook)

router.get("/cats", booksCtrl.getCats )

router.get("/:bookId", booksCtrl.getBookById)

router.get("/", booksCtrl.getBooks )

router.put("/:bookId", [authJwt.verifyToken, authJwt.isAdmin ], booksCtrl.updateBookById)

router.delete("/:bookId", [authJwt.verifyToken, authJwt.isAdmin ], booksCtrl.deleteBooksById)

router.get("/getBestByCat/:cat", booksCtrl.getBestByCat)


export default router;