import express, { Express } from "express";
import swaggerUI from "swagger-ui-express";
import { swagger } from "./openAPI";
import authRouter from "./routes/auth/authRouter";
import userRouter from "./routes/profile/userRouter";
import postsRoutes from "./routes/posts/postsRoutes";
import mongoose from "mongoose";
import "./config";

const PORT: string = process.env.PORT as string;
/*const { LOGIN, PASSWORD, url, DATABASE } = process.env;
const mongoUrl: string = `mongodb+srv://${LOGIN}:${PASSWORD}@${url}/${DATABASE}`;*/
const mongoUrl: string = "mongodb://127.0.0.1:27017";
const app: Express = express();
mongoose.connect(mongoUrl)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.error(err);
  });


// Middlewares
app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/posts", postsRoutes);
app.use("/api", swaggerUI.serve, swaggerUI.setup(swagger));

app.listen(PORT, () => {
  console.log(`server start on localhost:${PORT}`);
});
