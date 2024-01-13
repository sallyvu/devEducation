import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
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
