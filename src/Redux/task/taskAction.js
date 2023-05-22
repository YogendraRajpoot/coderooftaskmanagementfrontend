const host = "https://localhost:5000";

export const TASk_ADD = "TASk_ADD";
export const SINGLE_TASK_ADD = "SINGLE_TASK_ADD";
export const TASKDELETE = "TASKDELETE";
export const RESETTASK = "RESETTASK";

export const allTaskAdd = (payload) => ({
  type: TASk_ADD,
  payload,
});

export const singleTaskAdd = (payload) => ({
  type: SINGLE_TASK_ADD,
  payload,
});

export const taskDelete = (payload) => ({
  type: TASKDELETE,
  payload,
});
export const resetTask = (payload) => ({
  type: RESETTASK,
  payload,
});

export const fetchData = (payload) => async (dispatch) => {
  try {
    const authToken = localStorage.getItem("token");
    const response = await fetch(`${host}/api/tasks/fetchalltask`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const json = await response.json();
    dispatch(allTaskAdd(json));
  } catch (error) {
    console.error(error);
  }
};

export const addTask = (payload) => async (dispatch) => {
  try {
    const authToken = localStorage.getItem("token");
    const response = await fetch(`${host}/api/tasks/addtask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    dispatch(singleTaskAdd(json));
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = (payload) => async (dispatch) => {
  try {
    const authToken = localStorage.getItem("token");
    const response = await fetch(`${host}/api/tasks/deletetask/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    dispatch(taskDelete(payload));
  } catch (error) {
    console.error(error);
  }
};

export const editTask = (payload) => async (dispatch) => {
  const [id, title, description, status] = payload;
  try {
    const authToken = localStorage.getItem("token");
    const response = await fetch(`${host}/api/tasks/updatetask/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, status }),
    });
    dispatch(fetchData());
  } catch (error) {
    console.error(error);
  }
};
