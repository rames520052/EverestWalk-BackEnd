import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../Controllers/users.js';

const router = express.Router();

// UPDATE USER
router.put("/:id",updateUser);

// DELETE USER
router.delete("/:id", deleteUser);

// GET ONE USER DETAILS
router.get("/:id", getUser);

// GET ALL USERS DETAILS
router.get("/", getUsers)

export default router;