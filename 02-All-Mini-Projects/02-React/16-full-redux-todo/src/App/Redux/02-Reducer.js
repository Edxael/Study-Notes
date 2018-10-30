import { ADDTASK, UPDATETASKSTATUS, DELETEDONETASKS } from './00-KEY-String';

const initialState = {
  todos: [
    { task: 'clean room', finish: false },
    { task: 'wash dishes', finish: true },
    { task: 'do homework', finish: false }
  ]
}

export const reducer = ( state = initialState, action ) => {
  switch(action.type){
    case ADDTASK: 
      state.todos.push({ task: action.text, finish: false })
      return { todos: state.todos }
    case UPDATETASKSTATUS: 
      state.todos[action.idx].finish = !state.todos[action.idx].finish
      return state
    case DELETEDONETASKS: 
      state.todos = state.todos.filter((x) => { return x.finish === false })
      return state
    default: return state
  }
}