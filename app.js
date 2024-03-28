import express from "express";
import dbconn from "./routes/index.js";
import procRouter from "./routes/procRouter.js";
import nunjucks from "nunjucks";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
dotenv.config();
const port = process.env.PORT || 4000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

// route
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/map", (req, res) => {
  res.render("map");
});
app.get("/profile", (req, res) => {
  res.render("profile");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contactProc", procRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

dbconn();
