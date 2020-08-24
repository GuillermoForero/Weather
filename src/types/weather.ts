import {itemWeather} from "./weatherApi";

export const GET_DATA: string = 'GDATA';
export const CHANGE_DAY: string = 'CHANGE-DAY';
export const CHANGE_KEY: string = 'CHANGE-KEY';


interface getDataOpenAction {
    type: typeof GET_DATA
    payload: itemWeather[] | string
}

export type getDataOpen = getDataOpenAction
