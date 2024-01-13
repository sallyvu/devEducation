import Course from "../models/Course.js";
import dataHandler from "../../util/mongoose.js";
class MeController {
  //[GET] stored-courses

  async show(req, res) {
    try {
      let courses = await Course.find();
      courses = dataHandler.multipleMongooseToObject(courses);
      res.render("me/stored-courses", { courses });
    } catch {
      res.send("ERROR");
    }
  }
}

export default MeController;
