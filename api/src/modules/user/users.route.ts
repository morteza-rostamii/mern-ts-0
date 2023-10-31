import express from 'express'
import usersService from './users.service';

const router = express.Router();

// GET: /users
router
.route('/')
.get(usersService.getUsers);

// Get: /users/id
router
.route('/:id')
.get(usersService.getUser);

export default router