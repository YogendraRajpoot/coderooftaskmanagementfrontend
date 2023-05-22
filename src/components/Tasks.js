import React, { useEffect, useRef, useState } from "react";
import AddTask from "./AddTask";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editTask, fetchData } from "../Redux/task/taskAction";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      dispatch(fetchData());
    }
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [task, setTask] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateTask = (currentTask) => {
    ref.current.click();
    setTask({
      id: currentTask._id,
      etitle: currentTask.title,
      edescription: currentTask.description,
      etag: currentTask.tag,
    });
  };

  const handleClick = (e) => {
    dispatch(editTask(task.id, task.etitle, task.edescription, task.etag));
    refClose.current.click();
  };

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddTask />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={task.etitle}
                    aria-describedby="emailHelp"
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
                    id="edescription"
                    name="edescription"
                    value={task.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={task.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  task.etitle.length < 5 || task.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>You Task</h2>
        <div className="container mx-2">
          {tasks.length === 0 && "No tasks to display"}
        </div>
        {tasks.map((task) => {
          return (
            <TaskItem key={task._id} updateTask={updateTask} task={task} />
          );
        })}
      </div>
    </>
  );
};

export default Tasks;
