import { Router } from "express";
import { Register, Login, getAllBlogOfUser } from "../controler/user.controler";

const router = Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/', getAllBlogOfUser)

export default router