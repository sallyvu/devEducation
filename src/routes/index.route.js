import newsRouter from "./news.route.js";
import siteRouter from "./site.route.js";
import courseRouter from "./course.route.js";
import storedCoursesRouter from "./me.route.js";
function route(app) {
  app.use("/news", newsRouter);
  app.use("/course", courseRouter);
  app.use("/me", storedCoursesRouter);
  app.use("/", siteRouter);
}

export default route;
