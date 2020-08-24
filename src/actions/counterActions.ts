import {INCREMENT, DECREMENT, RESET} from "../types/counterTypes";

const increment = () => async (dispatch: any) =>{
    dispatch({
        type: INCREMENT
    })
}

const decrement = () => async (dispatch: any) =>{
    dispatch({
        type: DECREMENT
    })
}

const reset = () => async (dispatch: any) =>{
    dispatch({
        type: RESET
    })
}

export default {
    increment, decrement, reset
}
