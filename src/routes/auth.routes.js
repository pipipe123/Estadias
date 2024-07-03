import { Router } from "express";
import { addUser, login, logout } from "../controllers/auth.controller.js";


const router=Router();

router.post('/usuarios', addUser);

router.post('/usuarios/login', login);


router.post('/usuarios/logout', logout);

export default router;
