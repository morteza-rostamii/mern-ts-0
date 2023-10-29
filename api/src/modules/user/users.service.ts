import { NextFunction, Request, Response } from "express"
import errHelper from "../../helpers/errors.helper";
import userModel from "./users.model";

const usersService = {

    // Get: /users
    getUsers: errHelper.tryCatch(async (req: Request, res: Response) => {

        // async
        await userModel.fetchUsers(); 
        //throw new Error('fro m service');

        return res.status(200).json({
            msg: 'get all users'
        });
    }),

    // Get: /users/id
    getUser: errHelper.tryCatch(async (req: Request, res: Response) => {

        // async
         
        //throw new Error('fro m service');

        return res.status(200).json({
            msg: 'get a user'
        });
    }),

    /* 
    # req.query
    # req.headers
    # req.body
    # req.params
    # req.method
    */


}

export default usersService