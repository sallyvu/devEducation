import Course from "../models/Course.js";
import dataHandler from "../../util/mongoose.js";
class SiteController {
  //[GET] /home
  async index(req, res) {
    try {
      let courses = await Course.find();
      courses = dataHandler.multipleMongooseToObject(courses);
      res.render("home", { courses });
    } catch (error) {
      res.send("ERROR");
    }
  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
  //[GET] /contact
  contact(req, res) {
    res.render("contact");
  }
}
export default SiteController;
