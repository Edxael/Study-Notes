
import { ADDTASK, UPDATETASK } from './00-Keys';

export const AddNewTask = (taskText) => {
  return {
    type: ADDTASK,
    text: taskText
  }
}

export const FunToUpdateTask = (taskText, taskStatus, idx) => {
  console.log("Executiong UpdteTask", taskText, taskStatus, idx)
  return {
    type: UPDATETASK,
    text: taskText,
    done: taskStatus,
    idx: idx
  }
}