import mongoose from "mongoose";
import slugGenerator from "mongoose-slug-updater/lib/slug-generator.js";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
//innitialization slug plugin
mongoose.plugin(slugGenerator);

const CourseSchema = new Schema(
  {
    id: ObjectId,
    name: { type: String, maxLength: 255, require: true },
    description: { type: String, maxLength: 600 },
    videoId: { type: String, maxLength: 255, require: true },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);
const Course = mongoose.model("Course", CourseSchema);
export default Course;
