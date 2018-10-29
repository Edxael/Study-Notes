import { ADDTASK, UPDATETASK } from './00-Keys';

const initialState = {
  tasks: [
    { text: 'clean home', done: false },
    { text: 'wash dishes', done: false },
    { text: 'Read Book', done: false }
  ]
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADDTASK: 
      state.tasks.push({ text: action.text, done: false })
      return state
    case UPDATETASK: 
      console.log("--------------------------------")
      console.log("In Reducer action: ", action )
      console.log("isDone? ", state.tasks[action.idx])
      state.tasks[action.idx].done = action.done
      console.log("isDone? ", state.tasks[action.idx])
      console.log("--------------------------------")
      return state
    default: return state
  }
}