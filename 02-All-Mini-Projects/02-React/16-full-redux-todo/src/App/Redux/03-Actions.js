import { ADDTASK, UPDATETASKSTATUS, DELETEDONETASKS } from './00-KEY-String';

export const addNewTask = (itemToDo) => {
  return{
    type: ADDTASK,
    text: itemToDo
  }
}

export const changeTDstatus = (idx) => {
  return {
    type: UPDATETASKSTATUS,
    idx: idx
  }
}

export const removeFromStateDoneTask = () => {
  return {
    type: DELETEDONETASKS
  }
}