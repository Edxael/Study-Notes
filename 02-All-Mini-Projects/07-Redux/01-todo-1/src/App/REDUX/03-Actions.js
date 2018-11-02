import { ADDTODO } from './00-Key-Types';

export const addTodoToStore = (todoText) => {
  return {
    type: ADDTODO,
    text: todoText
  }
}