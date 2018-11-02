import { ADDTODO } from './00-Key-Types';

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
    default: return state
  }
}