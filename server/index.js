import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import { PORT } from "./config.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT);
console.log("server is running in port", PORT);
