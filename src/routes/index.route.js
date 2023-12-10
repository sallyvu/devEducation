import newsRouter from "./news.route.js";
import siteRouter from "./site.route.js";
import courseRouter from "./course.route.js";
function route(app) {
  app.use("/news", newsRouter);
  app.use("/course", courseRouter);
  app.use("/", siteRouter);
}

export default route;
