import { ADDNEWTASK, DECREMENT, RESET, ADDNEWTASK_BY_INPUT } from './00-Constants.js'


const defaultState = { taskslist: [
    { name: 'Eat Dinner', completed: false,  },
    { name: 'Study Redux', completed: true,  },
    { name: 'Code like a Rockstar', completed: false,  }
] }

export const reducer = ( state = defaultState, action ) => {
    switch(action.type){
        case ADDNEWTASK: 
            state.taskslist.push({ name: action.text, completed: false })
            return { taskslist: state.taskslist }
        // case DECREMENT: return { count: state.count - 1 }
        // case RESET: return { count: 0 }
        // case ADDNEWTASK_BY_INPUT: return { count: state.count + action.ADDNEWTASKBy }
        default: return state
    }
}
