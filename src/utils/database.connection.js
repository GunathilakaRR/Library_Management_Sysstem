import mongoose, { connection } from "mongoose";
import config from "../configs/index";
import logger from "../utils/logger"

let  database;

const connect = async ()=>{
    const MONGODB_URL = config.DB_CONNECTION_STRING;

    if(database) return;

    mongoose.connect("mongodb+srv://rusiru:1234@library-database-cluste.2xyzlqh.mongodb.net/library-db?retryWrites=true&w=majority")
    .then((connection)=>{
        database = connection;
        logger.info("database synced..");
    })
    .catch((err)=>{
        logger.error(err.message);
    })
}

export {connect};