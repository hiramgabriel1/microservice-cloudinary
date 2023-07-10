import mongoose, { Schema, model } from "mongoose";

const data = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      secure_url: String,
      public_id: String,
    },
  },
  {
    timestamps: true,
  }
);

const dataModel = new model("data", data);

export default dataModel;
