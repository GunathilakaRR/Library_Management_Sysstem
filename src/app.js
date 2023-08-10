dotenv.config();
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./utils/logger";
import {connect} from "./utils/database.connection"


const app = express();

const PORT = process.env.PORT || "8090";

// access only the requests coming from the front-end
app.use(cors());

// allows only the size of 20mb json request bodies
app.use(express.json({limit:"20mb"}));

app.get("/", (req, res, next)=>{
    res.send("<h1>📚 Library Management System</h1>");
    next();
})


app.listen(PORT, ()=>{
    logger.info(`server runs on port${PORT}`);
    connect();
});




