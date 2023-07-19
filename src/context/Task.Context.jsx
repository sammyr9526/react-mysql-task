import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  updateToggleRequest,
} from "../api/task.api";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newfield) => {
    try {
      const response = await updateTaskRequest(id, newfield);
    } catch (error) {
      console.error(error);
    }
  };
  const updateToggle = async (id, newfield) => {
    try {
      const response = await updateToggleRequest(
        id,
        newfield === 0 ? true : false
      );
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        updateToggle,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
