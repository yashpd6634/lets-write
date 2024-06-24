import { Hono } from "hono";
import { verify } from "hono/jwt";

export const router = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

router.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";
  const response = await verify(header, c.env.JWT_SECRET);

  if (response.id) {
    next();
  } else {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }
});

router.post("/", (c) => {
  return Response.json("blog");
});

router.put("/", (c) => {
  return Response.json("blog");
});

router.get("/:id", (c) => {
  const id = c.req.param("id");
  return Response.json(id);
});

router.get("/bulk", (c) => {
  return Response.json("bulk");
});
