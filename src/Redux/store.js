import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
// import { authReducer } from "./auth/reducerAuth";
import { taskReducer } from "./task/taskReducer";

const rootReducer = combineReducers({
  // auth: authReducer,
  task: taskReducer,
});
// const Middleware = (store) => (next) => (action) => {
//   // console.log("Middleware", action, next, store);
//   return typeof action === "function" ? action(store.dispatch) : next(action)
// }
export const store = createStore(rootReducer, applyMiddleware(thunk));
