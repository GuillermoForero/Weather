import {INCREMENT, DECREMENT, RESET} from "../types/counterTypes";
import axios from 'axios'
import {CHANGE_DAY, CHANGE_KEY, GET_DATA, getDataOpen} from "../types/weather";


export const getData = () => async (dispatch: any, getState: any) => {
    try {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Bogota&units=Metric&appid=effbd701eb173f445f09c28ddd5712f4');
        console.log(response.data)
        dispatch({
            type: GET_DATA,
            payload: response.data.list
        })
    } catch (error) {
        console.error(error);
    }
}

export const changeDay = (change: string) => async (dispatch: any, getState: any) => {
        dispatch({
            type: CHANGE_DAY,
            payload: change
        })
}
export const changeKey = (change: string) => async (dispatch: any, getState: any) => {
    dispatch({
        type: CHANGE_KEY,
        payload: change
    })
}

export default {
    getData,
    changeDay,
    changeKey
}
