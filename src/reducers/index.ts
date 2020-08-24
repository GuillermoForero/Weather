import { combineReducers } from 'redux';
import counterReducer from "./counterReducer";
import socialCardReducer from "./socialCardReducer";
import weatherReducer from "./weatherReducer";
export const rootReducer = combineReducers({
    counter: counterReducer,
    social: socialCardReducer,
    weather: weatherReducer
})

export type RootState = ReturnType<typeof rootReducer>
