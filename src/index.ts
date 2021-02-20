import express, { Express } from "express";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import { swagger } from "./openAPI";
import authRouter from "./routes/auth/authRouter";
import userRouter from "./routes/profile/userRouter";
import mongoose from "mongoose";
import "./config";

const PORT: string = process.env.PORT as string;
const mongoUrl: string = process.env.DATA_URL as string;
const app: Express = express();
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Middlewares
app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/api", swaggerUI.serve, swaggerUI.setup(swagger));

app.listen(PORT, () => {
  console.log(`server start on localhost:${PORT}`);
});
