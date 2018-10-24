import { INCREMENT, DECREMENT, RESET } from './00-Constants'
 
 
export const addOneToCount = () => {
    return { type: INCREMENT }
}
 
export const minusOneToCount = () => {
    return { type: DECREMENT }
}
 
export const resetCount = () => {
    return { type: RESET }
}