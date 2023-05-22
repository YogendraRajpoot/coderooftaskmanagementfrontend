import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../Redux/task/taskAction";

const TaskItem = (props) => {
  const dispatch = useDispatch();
  const { task, updateTask } = props;
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <div className="d-flex justify-content-between">
            <i
              className="far fa-trash-alt"
              onClick={() => {
                dispatch(deleteTask(task._id));
              }}
            ></i>
            <i
              className="far fa-edit"
              onClick={() => {
                updateTask(task);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
