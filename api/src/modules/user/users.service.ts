import { Request, Response } from "express"

const usersService = {

    // Get: /users
    getUsers: (req: Request, res: Response) => {
        return res.status(200).json({
            msg: 'get all users'
        });
    },

    // Get: /users/id
    getUser: (req: Request, res: Response) => {
        return res.status(200).json({
            msg: 'get one user'
        });
    },

    /* 
    # req.query
    # req.headers
    # req.body
    # req.params
    # req.method
    */


}

export default usersService