import {itemWeather, weatherApi} from "../types/weatherApi";
import {CHANGE_DAY, CHANGE_KEY, GET_DATA, getDataOpen} from "../types/weather";


const INITIAL_STATE: weatherApi= {list: [], daily: '2020-08-24', key: '0'}

export default (state = INITIAL_STATE, action: getDataOpen): weatherApi => {
    switch (action.type) {
        case GET_DATA: {
            const arrayTemp = state.list
            if (typeof action.payload !== "string") {
                action.payload.forEach((item: any) => {
                    arrayTemp.push(item)
                })
            }
            return <weatherApi>{...state, list: arrayTemp}
        }
        case CHANGE_DAY: {
            return <weatherApi>{...state, daily: action.payload}
        }
        case CHANGE_KEY: {
            return <weatherApi>{...state, key: action.payload}
        }
        default:
            return <weatherApi>{...state};
    }
}
