const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/myclatDB`, {
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