import mongoose from "mongoose";
import { config } from "./config";
import Logging from "../libs/Logging";

export function connect_db(startServer:any) {
  mongoose
    .connect(config.mongo.url, {
        retryWrites: true, 
        w: 'majority',
    })
    .then(() => {
        Logging.info('connected to mongodb.');
        startServer();
    })
    .catch((error) => {
        Logging.error('connect to db failed!!');
    });
}