import { Router } from "express";
import {
  createListing,
  deleteListing,
  getAllListing,
  getListingById,
  updateListing,
} from "../controllers/lsiting.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/").get(getAllListing);
router.route("/:id").get(getListingById);
router.route("/:id").delete(deleteListing);
router.route("/add").post(
  verifyJWT,
  upload.fields([
    {
      name: "images",
      maxCount: 10,
    },
    {
      name: "documents",
      maxCount: 10,
    },
  ]),
  createListing
);
router.route("/edit").post(
  verifyJWT,
  upload.fields([
    {
      name: "images",
      maxCount: 10,
    },
    {
      name: "documents",
      maxCount: 10,
    },
  ]),
  updateListing
);

export default router;
