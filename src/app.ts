import  express, {Application}  from "express";
import { connectDB } from "./config/db";
import userRoute from './routes/user.route'
import blogRoute from './routes/blog.router'
const app:Application = express()

let port:number = 3003
app.use(express.json())

app.use('/user', userRoute)
app.use('/blog', blogRoute)

app.listen(port, ()=> console.log(`server is lisining on port ${port}`))
connectDB()