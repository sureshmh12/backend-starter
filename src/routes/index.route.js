import express from "express";
import { userRouter } from "./user.route.js";

const indexRouter = index.express();

indexRouter.use("/", userRouter);

export { indexRouter };
