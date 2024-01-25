import mongoose from "mongoose";
const Schema = mongoose.Schema;
import slug from "mongoose-slug-updater";
mongoose.plugin(slug);
const ObjectId = Schema.ObjectId;

const CourseSchema = new Schema(
  {
    id: ObjectId,
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    videoId: { type: String, maxLength: 255, required: true },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);
const Course = mongoose.model("Course", CourseSchema);
export default Course;
