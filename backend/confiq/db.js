const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGOLOCAL}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected: Localhost-27017`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;