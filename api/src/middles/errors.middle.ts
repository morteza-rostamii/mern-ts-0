import { NextFunction, Request, Response } from "express"

const errors = {
    logger: (error:any, req:Request, res:Response, next:NextFunction) => {
        console.log('an error happened');
        return res.status(400).json(error.message);
    }
}

export default errors