import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoURI = process.env.MONGO_URI;
const mongoDBNAME = process.env.MONGO_DBNAME;
const dbconn = async () => {
  mongoose
    .connect(mongoURI, {
      dbName: mongoDBNAME,
    })
    .then(() => {
      console.log("MongoDB is connected!");
    })
    .catch((err) => {
      console.error("connection error occured ", err.message);
    });
};

export default dbconn;
