import express from "express"
import{connectDB} from "./Config/db"
import 'dotenv/config';
import bookrouter from './Router/Book.router'
import userrouter from './Router/User.roter'
import Lonarouter from './Router/Lona.router'


const app = express()
app.use(express.json());
connectDB()
app.use('/api/v1/book',  bookrouter);
app.use('/api/v1/user', userrouter );
app.use('/api/v1/lona', Lonarouter );


const PORT = process.env.PORT ||5000
app.listen(PORT ,()=>{
    console.log(" app work in port "+PORT)
}

)