import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import route from "./routes/index.route.js";
const app = express();
const port = 3000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//static file
app.use(express.static(path.join(__dirname, "public")));

//http logger
app.use(morgan("combined"));

//template engine
app.engine(
  ".hbs",
  engine({
    extname: ".hbs", //config extention name
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Route init khoi tao tuyen duong
route(app);

app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
