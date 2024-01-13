import dataHandler from "../../util/mongoose.js";
import Course from "../models/Course.js";

class CourseController {
  //[GET] course/show
  async show(req, res) {
    try {
      const slugName = req.params.slug;
      let course = await Course.findOne({ slug: slugName });
      course = dataHandler.mongooseToObject(course);
      res.render("courses/show", { course });
    } catch {
      res.send("ERROR");
    }
  }
  //[GET] courses/create
  create(req, res) {
    res.render("courses/create");
  }
  //[POST] courses/store
  async store(req, res) {
    try {
      await Course.create(req.body);
      res.redirect("/");
    } catch {
      res.send("ERROR");
    }
  }
  //[GET] courses/edit
  async edit(req, res) {
    try {
      const courseId = req.params.id;
      let course = await Course.findById(courseId);
      course = dataHandler.mongooseToObject(course);
      res.render("courses/edit", { course });
    } catch {
      res.send("ERROR");
    }
  }
  //[PUT] courses/update
  async update(req, res) {
    try {
      const courseId = req.params.id;
      const updateDetails = req.body;
      await Course.findByIdAndUpdate(courseId, updateDetails);
      // course = dataHandler.mongooseToObject(course);
      res.redirect("/me/stored/courses");
    } catch {
      res.send("ERROR");
    }
  }
}

export default CourseController;
