import express from "express";
import SiteController from "../app/controllers/SiteController.js";
const siteRouter = express.Router();
const siteController = new SiteController();
siteRouter.get("/", siteController.index);
siteRouter.get("/search", siteController.search);
siteRouter.get("/contact", siteController.contact);
export default siteRouter;
