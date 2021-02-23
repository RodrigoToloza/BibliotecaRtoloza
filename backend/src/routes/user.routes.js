import {Router} from "express";
import * as userCtrl from '../controllers/user.controller'
import {authJwt} from '../middlewares'


const router = Router()

router.post('/',[
    authJwt.verifyToken,
    authJwt.isAdmin
], userCtrl.createUser)

export default router;