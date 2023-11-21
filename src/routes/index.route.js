import newsRouter from "./news.route.js";
import siteRouter from "./site.route.js";
function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

export default route;
