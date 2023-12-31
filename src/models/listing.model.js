import mongoose, { Schema } from "mongoose";

const lsitingSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      enum: ["partition", "beds Space"],
      default: "beds Space",
    },
    prefrence: {
      type: String,
      index: true,
    },
    building: {
      type: String,
    },
    area: {
      type: String,
    },
    city: {
      type: String,
    },
    floor: {
      type: String,
    },
    flat_no: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    images: [
      {
        type: String,
      },
    ],
    documents: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Listing = mongoose.model("Listing", lsitingSchema);
