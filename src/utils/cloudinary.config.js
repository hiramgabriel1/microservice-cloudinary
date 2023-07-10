import { v2 as cloudinary } from "cloudinary";
import {
  cloudinary_key,
  cloudinary_secret,
  cloudinary_name,
} from "../config/config.js";

cloudinary.config({
  cloud_name: cloudinary_name,
  api_key: cloudinary_key,
  api_secret: cloudinary_secret,
});

export const uploadImages = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "image",
  });
};

export const deleteImages = async (filePath) => {
  return await cloudinary.uploader.destroy(publicId);
};
