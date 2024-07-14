import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import productsRoutes from './routes/productsRoutes.js'
import Mongo from './config/db.js'
import { ErrorHandler } from './MiddleWare/errorMiddleWare.js'
const port = process.env.PORT || 5000
const app = express()
Mongo();
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api/products', productsRoutes)
app.use(ErrorHandler)
app.use(express.static('./uploads'))
app.listen(port, console.log(`Server Started on port ${port}`))