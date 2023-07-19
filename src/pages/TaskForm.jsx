import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTasks } from "../context/Task.Context";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({ title: "", description: "" });

  const params = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const tasks = await getTask(params.id);
        setTask({
          title: tasks.title,
          description: tasks.description,
        });
        console.log(tasks);
      }
    };
    loadTask();
  }, []);
  return (
    <div className="m-auto w-72 md:w-96 ">
      <h1 className="className= text-4xl my-6 m-a text-center uppercase">
        {params.id ? "Update Task" : "Create Task"}
      </h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col m-auto mt-5 p-4 mx-auto bg-zinc-800 rounded"
          >
            <label>title</label>
            <input
              className="bg-zinc-700 py-2 px-1 rounded border-r-zinc-200 outline-slate-400 w-full "
              type="text"
              name="title"
              placeholder="write a title"
              onChange={handleChange}
              value={values.title}
              required
            />
            <label className="mt-3">description</label>
            <textarea
              className="bg-zinc-700 py-2 px-1 rounded border-r-zinc-200 outline-slate-400 w-full "
              name="description"
              rows="3"
              placeholder="write a description"
              onChange={handleChange}
              value={values.description}
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 p-2 bg-neutral-300 text-black  hover:bg-neutral-400  w-full font-semibold rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
