import {INCREMENT, DECREMENT, RESET} from '../types/counterTypes'
const INITIAL_STATE = {
    counter: 0
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, counter: state.counter+1}
        case DECREMENT:
            return {...state, counter: state.counter-1}
        case RESET:
            return {...state, counter: 0}
        default:
            return state;
    }
}
