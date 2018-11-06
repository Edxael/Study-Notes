import { ADDTODO, UPDATE_TASK_STATUS, REMOVE_DONE_TASKS } from './00-Key-Types';

export const addTodoToStore = (todoText) => {
  return {
    type: ADDTODO,
    text: todoText
  }
}

export const updateTaskStatusFun = (status, idx) => {
  return {
    type: UPDATE_TASK_STATUS,
    status: status,
    idx: idx
  }
}

export const removeDoneTasks = () => {
  console.log("The action: removeDoneTasks")
  return {
    type: REMOVE_DONE_TASKS,
  }
}