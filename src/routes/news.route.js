import express from "express";
import NewsController from "../app/controllers/NewsController.js";
const newsRouter = express.Router();
const newsController = new NewsController();
newsRouter.get("/", newsController.index);
newsRouter.get("/:slug", newsController.show);
export default newsRouter;
