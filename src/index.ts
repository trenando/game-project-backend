import express, { Express } from "express";
import swaggerUI from "swagger-ui-express";
import { swagger } from "./openAPI";
import authRouter from "./routes/auth/authRouter";
import userRouter from "./routes/profile/userRouter";
import postsRoutes from "./routes/posts/postsRoutes";
import mongoose from "mongoose";
import "./config";

const PORT: string = process.env.PORT as string;
const mongoUrl: string = process.env.DATA_URL as string;
const app: Express = express();
try {
  mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (err) {
  console.error(err);
}

// Middlewares
app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/posts", postsRoutes);
app.use("/api", swaggerUI.serve, swaggerUI.setup(swagger));

app.listen(PORT, () => {
  console.log(`server start on localhost:${PORT}`);
});
