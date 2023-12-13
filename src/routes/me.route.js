import express from "express";
import MeController from "../app/controllers/MeController.js";
const meController = new MeController();
const storedCoursesRouter = express.Router();
storedCoursesRouter.get("/stored-courses", meController.show);
export default storedCoursesRouter;
