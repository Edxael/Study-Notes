import { ADDTODO, UPDATE_TASK_STATUS, REMOVE_DONE_TASKS } from './00-Key-Types';

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
      state.todoList[action.idx].completed = action.status;
      return state
    case REMOVE_DONE_TASKS: 
      console.log("Reducer case: REMOVE_DONE_TASKS")
      console.log("SBF: ", state.todoList)
      const notDone = state.todoList.filter((x) => { return x.completed === false })
      console.log("AFF: ", notDone)
      state.todoList = notDone
      console.log("AFF2: ", state.todoList)
      return state.todoList
    default: return state
  }
}

