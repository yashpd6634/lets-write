import { Hono } from "hono";
import { router as rootRouter } from "./routes";

const app = new Hono();

app.route("/api/v1/", rootRouter);

export default app;
