import express from "express";
import { adminLogin, getAllBlogsAdmin, getAllComments, getDashboard } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);

adminRouter.get("/blogs", auth, getAllBlogsAdmin);

adminRouter.get("/dashboard", auth, getDashboard);

export default adminRouter;