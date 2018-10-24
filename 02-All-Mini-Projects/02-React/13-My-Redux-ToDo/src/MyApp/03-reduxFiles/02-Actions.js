import { ADDNEWTASK, DECREMENT, RESET,ADDNEWTASK_BY_INPUT } from './00-Constants.js'


export const addTaskToStoreList = (taskToAdd) => {
    return { 
        type: ADDNEWTASK,
        text: taskToAdd
    }
}

export const minusOneToCount = () => {
    return { type: DECREMENT }
}

export const resetCount = () => {
    return { type: RESET }
}


export const addByInput = (payload = {}) => {
    console.log("The Payload: ", payload)
    return { 
        type: ADDNEWTASK_BY_INPUT ,
        ADDNEWTASKBy: typeof payload.ADDNEWTASKBy === 'number' ? payload.ADDNEWTASKBy : 0
    }
}


