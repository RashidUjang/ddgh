import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import roomRouter from "./routes/v1/roomRouter.js";
import sessionRouter from "./routes/v1/sessionRouter.js";

dotenv.config();

const sessionSettings = {
  name: "ddgh",
  secret: process.env.COOKIE_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: { httpOnly: false, sameSite: false, secure: process.env.NODE_ENV === "production", maxAge: parseInt(process.env.COOKIE_MAXAGE) },
  
};

if (process.env.NODE_ENV === "production") {
  sess.cookie.secure = true;
}

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  // Necessary to accept credentials from the frontend
  credentials: true,
}));
app.use(session(sessionSettings));
app.use(cookieParser());

app.use("/api/v1/room", roomRouter);
app.use("/api/v1/session", sessionRouter);

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Listening on port ${process.env.BACKEND_PORT}.`);
});
