import {Router} from "express";
import { checkUser, getAllUsers, onBoardUser } from "../controllers/AuthController.js";

const router = Router();

// check user already exist or not
router.post("/check-user", checkUser);
router.post("/onboard-user", onBoardUser);
router.get("/get-contacts", getAllUsers);

export default router;

