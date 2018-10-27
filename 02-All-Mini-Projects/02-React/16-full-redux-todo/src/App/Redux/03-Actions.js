import { ADDTASK } from './00-KEY-String';

export const addNewTask = (itemToDo) => {
  return{
    type: ADDTASK,
    text: itemToDo
  }
}

