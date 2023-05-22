import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/task/taskAction";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ title: "", description: "", status: "" });

  const handleClick = (e) => {
    e.preventDefault();
    console.log("HELLO");
    dispatch(addTask(task.title, task.description, task.status));
    setTask({ title: "", description: "", status: "" });
  };

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Add A Task</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            value={task.title}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={task.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={task.status}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button
          disabled={task.title.length < 5 || task.description.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
