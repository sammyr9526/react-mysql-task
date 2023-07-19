import { useEffect } from "react";
import TasckCard from "../components/TasckCard";
import { useTasks } from "../context/Task.Context";

const TasksPage = () => {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <div>
      <h1 className="text-4xl my-5 m-a text-center">TASKS MYSQL</h1>
      <div className=" flex flex-wrap m-auto">
        {tasks.length === 1 ? (
          <div>
            <h1>No tasks yet</h1>
          </div>
        ) : (
          tasks.map((task) => <TasckCard task={task} key={task.id} />)
        )}
      </div>
    </div>
  );
};

export default TasksPage;
