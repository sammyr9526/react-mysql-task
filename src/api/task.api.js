import axios from "axios";

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/api/tasks", task);

export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/api/tasks");

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/api/tasks/${id}`);

export const deleteRequest = async (id) =>
  await axios.delete(`http://localhost:4000/api/tasks/${id}`);

export const updateTaskRequest = async (id, newfield) =>
  await axios.put(`http://localhost:4000/api/tasks/${id}`, newfield);

export const updateToggleRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/api/tasks/${id}`, { done });
