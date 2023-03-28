import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import roomRouter from "./routes/v1/roomRouter.js";

dotenv.config();
const app = express();

app.use(cors());

app.use("/api", roomRouter);

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Listening on port ${process.env.BACKEND_PORT}.`);
});
