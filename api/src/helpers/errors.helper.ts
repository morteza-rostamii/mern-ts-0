import { NextFunction, Request, Response } from "express";

const errHelper = {

    // takes: service =: returns: a middleware/controller to: get(<-middleware)
    tryCatch: (service:Function) => async (req:Request, res:Response, next:NextFunction) => {
        try {
            await service(req, res);
        } catch(err) {
            console.log('--------catching error!!');
            return next(err);
        }
    },
}

export default errHelper