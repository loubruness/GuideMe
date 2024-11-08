import { Router } from 'express';
const router = Router();
import { createUserAction, loginUserAction, verifyTokenAction } from '../controllers/auth.js';
import { verifyToken } from '../middlewares/security.js';

router.get("/", (req, res) => {
    res.send("Welcome to the auth route");
});
router.post("/register", createUserAction);
router.post("/login", loginUserAction);
router.get("/verifyToken", verifyToken, verifyTokenAction);

export default router;