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
    } catch (error) {
      console.error("Error creating course:", error.message);
      console.error(error.stack); // Log the full stack trace
      // Send a more informative response to the client
      res.status(500).send("Internal Server Error");
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
  //[PUT] courses/id
  async update(req, res) {
    try {
      const courseId = req.params.id;
      const updateDetails = req.body;
      updateDetails["slug"] = updateDetails.name;
      await Course.findByIdAndUpdate(courseId, updateDetails);
      res.redirect("/me/stored/courses");
    } catch {
      res.send("ERROR");
    }
  }
  //[DELETE] courses/id
  async delete(req, res) {
    try {
      await Course.deleteOne({ _id: req.params.id });
      res.redirect("back");
    } catch {
      res.send("ERROR");
    }
  }
}

export default CourseController;
