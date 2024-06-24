import { Hono } from "hono";
import { router as userRouter } from "./user";
import { router as blogRouter } from "./blog";

export const router = new Hono();

router.route("/user", userRouter);
router.route("/blog", blogRouter);
