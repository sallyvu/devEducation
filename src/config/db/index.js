import mongoose from "mongoose";
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://hauvu:VQ4TaeY54pM77j4M@cluster.y0rfjqb.mongodb.net/f8_education_dev"
    );
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect failure", error.message);
  }
}
export default connect;
