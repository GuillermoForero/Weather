import * as React from 'react';
import {ContainerCard, DayTitle, ContainerImg, ContainerTemperature, ImageWeather, TempMax, TempMin} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../reducers";
import {itemWeather, weatherApi} from "../../../types/weatherApi";
import {useEffect, useState} from "react";
import {DAYS} from "../../../types/Days";
import allActions from "../../../actions/allActions";

interface Props {
    date: string,
    keyId: string
}
interface MaxMinTemperature {
    max: string,
    min: string
}

export const DayCard = (props: Props) => {
    const init: MaxMinTemperature = {max: '0', min: '0'}
    const [icon, setIcon] = useState('01n');
    const [selected, setSelected] = useState(false);
    const dispatch = useDispatch()
    const [maxMin, setMaxMin] = useState(init);
    const weatherArray = useSelector<RootState, weatherApi>(state => state.weather);
    useEffect(() => {
        let arrayDay = [...weatherArray.list];
        arrayDay = arrayDay.filter(item => {
            return item.dt_txt.includes(props.date);
        })
        let max=0, min=100;
        function getCommonItem(array: itemWeather[])
        {
            const actualDate = new Date();
            let hour = actualDate.getHours();
            if(array.length === 0)
                return '10d';
            let modeMap: any = {};
            let maxEl: string = '04d', maxCount = 0;
            if (hour >=19 || hour<=5){
                maxEl = '04n'
            }
            array.forEach((value) => {
                let el:string
                try {
                    el = value.weather[0].icon
                }catch (e){
                    el = '10d'
                }

                if (!(hour >=19 || hour<=5) && el.includes('d')){
                    if(modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if(modeMap[el] > maxCount)
                    {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }else if ((hour >=19 || hour<=5) &&el.includes('n')){
                    if(modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if(modeMap[el] > maxCount)
                    {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }

            })
            return maxEl;
        }
        setIcon(getCommonItem(arrayDay))
        arrayDay.forEach(value => {
            if (value.main.temp_max > max) {
                max = value.main.temp_max
            }
            if (value.main.temp_min < min) {
                min = value.main.temp_min
            }
        })
        let maxResult: string = max.toPrecision(3)
        let minResult: string = min.toPrecision(3)
        setMaxMin({max: maxResult,min: minResult})
    }, [props.date, weatherArray]);
    useEffect(() => {
        if (weatherArray.key === props.keyId){
            setSelected(true)
        }else {
            setSelected(false)
        }
    }, [props.keyId, weatherArray.key])
    const searchDay = (): string => {
        let day: number = new Date(props.date).getDay();
        let daysArray = Object.entries(DAYS);
        let returnValue = ''
        daysArray.forEach(value => {
            const valueItem = value.pop()
            const index = value.pop()
            if (index === String(day)){
                returnValue = valueItem.substr(0, 3)
            }
        })
        return returnValue
    }
    const handleChangeDay = () =>{
        setSelected(true)
        dispatch(allActions.weatherActions.changeKey(props.keyId))
        dispatch(allActions.weatherActions.changeDay(props.date));
    }
    return <ContainerCard onClick={handleChangeDay} className={selected ? 'selected': ''}>
        <DayTitle>{searchDay()}</DayTitle>
        <ContainerImg>
            <ImageWeather src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
        </ContainerImg>
        <ContainerTemperature>
            <TempMax>{maxMin.max}°</TempMax>
            <TempMin>{maxMin.min}°</TempMin>
        </ContainerTemperature>
    </ContainerCard>
}
