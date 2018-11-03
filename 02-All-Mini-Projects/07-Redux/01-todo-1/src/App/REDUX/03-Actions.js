import { ADDTODO, UPDATE_TASK_STATUS } from './00-Key-Types';

export const addTodoToStore = (todoText) => {
  return {
    type: ADDTODO,
    text: todoText
  }
}

export const updateTaskStatusFun = (status, idx) => {
  console.log("In 03-Actions.js executing: updateTaskStatusFun()")
  return {
    type: UPDATE_TASK_STATUS,
    status: status,
    idx: idx
  }
}