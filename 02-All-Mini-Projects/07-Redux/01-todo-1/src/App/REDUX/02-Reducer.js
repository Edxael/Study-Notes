import { ADDTODO, UPDATE_TASK_STATUS } from './00-Key-Types';

const initialState = {
  todoList: [
    { task: 'Clean Room', completed: false },
    { task: 'Do Homework', completed: false }
  ],
  employees: [ 'Dan', 'Marco', 'Leticia', 'lucius' ],
  knites: ['Manigoldo', 'Sesh', 'Ded Mask']
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADDTODO:
      state.todoList.push({ task: action.text, completed: false })
      return state
    case UPDATE_TASK_STATUS:
      console.log("====> S-BF: ", state.todoList)
      state.todoList[action.idx].completed = action.status;
      console.log("====> S-AF: ", state.todoList)
      return state
    default: return state
  }
}