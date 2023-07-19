import React, { useState } from "react";
import { useTasks } from "../context/Task.Context";
import { useNavigate } from "react-router-dom";

const TasckCard = ({ task }) => {
  const { deleteTask, updateToggle } = useTasks();
  const [status, setStatus] = useState({ id: task.id, done: !task.done });
  const navigate = useNavigate();

  const handleClick = async (task) => {
    const response = await updateToggle(task.id, task.done);
  };
  return (
    <div className="bg-zinc-700 text-slate-50 m-auto w-72 md:w-96  p-5  my-3 rounded-md">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col">
          <h2 className="mb-2 font-bold text-lg">{task.title} </h2>
          <p className="mb-2 text-md">{task.description}</p>
        </div>
        <span
          className="cursor-pointer	"
          onClick={() => {
            handleClick(task);
          }}
        >
          {task.done == 1 ? "✔️" : "❌"}
        </span>
      </div>
      <div className="flex flex-col ">
        <span className="my-2">{task.createdAt}</span>
        <div className="flex justify-end">
          <button
            className="p-3 bg-neutral-300 text-black  hover:bg-neutral-400 ml-2 rounded-md  "
            onClick={() => {
              navigate(`/edit/${task.id}`);
            }}
          >
            Edit
          </button>
          <button
            className="p-3 bg-neutral-300 text-black hover:bg-neutral-400 ml-2 rounded-md "
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasckCard;
