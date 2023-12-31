import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import registerrouter from "./routes/user.routes.js";
import lsitingRoute from "./routes/lsiting.routes.js";
app.use("/api/v1/users", registerrouter);
app.use("/api/v1/listing", lsitingRoute);

export { app };
