import * as React from 'react';
import { useDispatch, useSelector} from "react-redux";
import {DayCard} from "../dayCard";
import {RootState} from "../../../reducers";
import {useEffect, useState} from "react";
import {DayCardsContainer, DetailContainer, MainContainer} from "./styles";
import {weatherApi} from "../../../types/weatherApi";
import {DailyDetail} from "../dailyDetail";

export const MainWeather = () => {
    const [render, setRender] = useState<boolean>(false);
    const weatherArray = useSelector<RootState, weatherApi>(state => state.weather);
    const [dates, setDates] = useState<string[]>([]);
    useEffect(() => {
        const getDates = () => {
            let arrayOfDates: string[] = [];
            weatherArray.list.forEach(weatherArray => {
                const dateObject = {...weatherArray}
                const date = dateObject.dt_txt.substring(0, 10)
                if (!arrayOfDates.includes(date)){
                    arrayOfDates.push(date)
                }
            })
            setDates(arrayOfDates)
        }
        getDates()
    }, [render,weatherArray.list])
    if (weatherArray.list.length>0 && !render){
        setRender(true)
    }
    return <MainContainer>
        <DetailContainer>
            <DailyDetail/>
        </DetailContainer>
        <DayCardsContainer>
            {dates.map((item, index) => {
                return <DayCard key={index} keyId={index.toString()} date={item}/>
            })}
        </DayCardsContainer>
    </MainContainer>
}

export default (MainWeather)
