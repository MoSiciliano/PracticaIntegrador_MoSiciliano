import express from "express";
import handlebars from "express-handlebars";
import path from "path";

import { __dirname } from "./utils.js";
import StudentsRouter from "./router/student.router.js";
import ViewRouter from "./router/index.router.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.engine("handlebars", handlebars.engine());
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "handlebars");

//routers
app.get("/", (Req, res) => {
  res.send("Hello from backend 😁");
});

app.use("/", ViewRouter);
app.use("/api", StudentsRouter);

app.use((error, req, res, next) => {
  const message = "a new unexpected error has occurred";
  console.error(message);
  res.status(500).json({ message });
});
export default app;
