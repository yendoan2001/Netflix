import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Database_Connect from './src/configs/connect_database.js'
import bodyParser from "body-parser";
import AuthRouter from "./src/routes/AuthRouter.js";
import {errorHandler} from "./src/middlewares/ErrorMiddleware.js";
import UserRouter from "./src/routes/UserRouter.js";
import MovieRouter from "./src/routes/MovieRouter.js";
import CategoryRouter from "./src/routes/CategoryRouter.js";
import UploadRouter from "./src/controllers/File_Upload.js";


const PORT = process.env.PORT || 5000;
const app = express()

dotenv.config()
Database_Connect()

app.use(bodyParser.json())
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.use("/movie", MovieRouter);
app.use("/category", CategoryRouter);
app.use("/upload", UploadRouter);
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});