import {Router} from "express";
import * as authCtrl from '../controllers/auth.controller'
import { check } from 'express-validator';
const router = Router()

router.post('/signup',
    [
        check('rut', 'El rut es obligatorio').not().isEmpty(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        check('nombre', 'Debe ingresar el nombre').not().isEmpty(),
        check('apellido', 'Debe ingresar el apellido').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail()
    ],
    authCtrl.signUp)

router.post('/login', authCtrl.Login)

export default router;