const dataHandler = {
  multipleMongooseToObject: function multipleMongooseToObject(mongoose) {
    return mongoose.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
export default dataHandler;
