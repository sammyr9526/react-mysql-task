import axios from "axios";

export const createTaskRequest = async (task) =>
  await axios.post("https://mysql-task-y3vi.onrender.com/api/tasks", task);

export const getTasksRequest = async () =>
  await axios.get("https://mysql-task-y3vi.onrender.com/api/tasks");

export const getTaskRequest = async (id) =>
  await axios.get(`https://mysql-task-y3vi.onrender.com/api/tasks/${id}`);

export const deleteRequest = async (id) =>
  await axios.delete(`https://mysql-task-y3vi.onrender.com/api/tasks/${id}`);

export const updateTaskRequest = async (id, newfield) =>
  await axios.put(
    `https://mysql-task-y3vi.onrender.com/api/tasks/${id}`,
    newfield
  );

export const updateToggleRequest = async (id, done) =>
  await axios.put(`https://mysql-task-y3vi.onrender.com/api/tasks/${id}`, {
    done,
  });
