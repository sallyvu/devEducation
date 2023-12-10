import express from "express";
import CourseController from "../app/controllers/CourseController.js";
const courseRouter = express.Router();
const courseController = new CourseController();
courseRouter.post("/store", courseController.store);
courseRouter.get("/create", courseController.create);
courseRouter.get("/:slug", courseController.show);

export default courseRouter;
