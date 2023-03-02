import { Router } from "express";
import { creatBlog, getAllBlog, updateBlog, deleteBlog } from "../controler/blog.controler";

const router = Router()

router.post('/', creatBlog)
router.get('/', getAllBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router