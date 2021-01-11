const mongoose = require('mongoose');
require('dotenv').config()

const connectToDB = async conn => {
  if (conn === null) {
    conn = await mongoose.createConnection(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      bufferCommands: false,
      bufferMaxEntries: 0
    });
  }
  return conn;
}

module.exports = connectToDB;
