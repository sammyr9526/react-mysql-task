import { Router } from "express";
import {
  getTasks,
  getTasksById,
  updateTasks,
  addTasks,
  deleteTasks,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/api/tasks", getTasks);

router.get("/api/tasks/:id", getTasksById);

router.post("/api/tasks", addTasks);

router.put("/api/tasks/:id", updateTasks);

router.delete("/api/tasks/:id", deleteTasks);

export default router;
