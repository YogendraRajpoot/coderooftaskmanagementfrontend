import { TASk_ADD, SINGLE_TASK_ADD, RESETTASK } from "./taskAction";

const initState = {
  tasks: [],
};
export const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case TASk_ADD:
      return {
        ...state,
        tasks: action.payload,
      };
    case SINGLE_TASK_ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TASKDELETE:
      const newTasks = state.tasks.filter((task) => {
        return task._id !== action.payload;
      });
      return {
        ...state,
        tasks: newTasks,
      };
    case RESETTASK:
      return {
        ...state,
        tasks: [],
      };

    default:
      return state;
  }
};
