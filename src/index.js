import { app } from "./app.js";
import connectDb from "./db/index.js";

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("server running on port number" + process.env.PORT || 8000);
    });
  })
  .catch((error) => {
    console.log("error connecting to the database");
  });
