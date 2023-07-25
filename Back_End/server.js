import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Database_Connect from './src/configs/connect_database.js'
import bodyParser from "body-parser";
import AuthRouter from "./src/routes/AuthRouter.js";
const PORT = process.env.PORT || 5000;
const app = express()



dotenv.config()
Database_Connect()
app.use(bodyParser.json())

app.use(cors());
app.use("/auth", AuthRouter);


app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});