import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import fileUpload from "express-fileupload";
import colors from "colors"
import { PORT } from "./config/config.js";
import { connectDB } from "./config/mongoose.js";

dotenv.config();
connectDB();

// configuration
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/uploads/",
  })
);
app.use(cors());
app.use(express.json());

// error handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT);
