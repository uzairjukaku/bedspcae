// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dotenv.config({
  path: "./env",
});

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_DB}/${DB_NAME}`
    );

    console.log(
      "mongodb connected to the server " + connection.connection.host
    );
  } catch (error) {
    console.error("mongodb connection error", error);

    process.exit(1);
  }
};
export default connectDb;
