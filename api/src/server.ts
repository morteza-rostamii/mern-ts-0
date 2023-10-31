import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { config } from './config/config';

// import routes
import usersRouter from './modules/user/users.route'
import errors from './middles/errors.middle';
import { connect_db } from './config/db';
import Logging from './libs/Logging';

//******************************

// mongodb connection:
 
connect_db(startServer);

//******************************

// if: mongo_connected: run node server
function startServer() {

    // app
    const app = express();

    // run on each request
    app.use((req, res, next) => {
        /* log the request */
        Logging.info(`Incoming -> method: [${req.method}] - url: [${req.url}] - ip: [${req.socket.remoteAddress}]`);

        // on req finish: log response_status
        res.on('finish', () => {
            Logging.info(`Incoming -> method: [${req.method}] - url: [${req.url}] - ip: [${res.statusCode}]`);
        })

        // go to next middleware
        next();
    });

    // parse json
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    /* rules of api */
    app.use((req, res, next) => {
        // cors: any url is allowed
        res.header('Access-Control-Allow-Origin', '*');
        // what headers are allowed
        res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept, Authorization');

        // if: pass OPTIONS inside our request =: returns all types of requests we can send.
        if (req.method == "OPTIONS") {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        // go next middleware
        next();
    });

    // cors
    app.use(cors({
        // origin: "*"
        origin: [
            config.server.admin_url,
            config.server.site_url,
        ],
        // allow cookies
        credentials: true,
    }));
    
    // register routes
    app.use('/users', usersRouter);
    
    // Catch-all route: if: not matching any route
    app.use ('*', (req, res) => {
        const error = new Error('not found');
        Logging.error(error);
        return res.status(404).json({
            msg: error.message,
        });
    });
    
    // error handler middleware: has to come after all routes and middlewares
    app.use(errors.logger);
    
    // start node server
    app.listen(config.server.port, () => {
        Logging.info(`node running at: ${config.server.port}`);
    });
}


// middleware: run on each request =: has to come before routes.
/* app.use((req, res, next) => {
    console.log(`${req.method} ${req.ip} ${req.originalUrl}`);
    next();
}); */ 