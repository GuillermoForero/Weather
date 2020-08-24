import * as React from 'react';
import {
    Data,
    DataContainer,
    Day,
    DayDetail, Degrees,
    DetailContainer,
    GraphicDetail,
    IconTemperatureContainer, ImageIcon,
    ImageIconContainer,
    InfoAndChangesContainer, Temperature, TemperatureContainer,
    TitleContainer,
    TitleDirection
} from "./styles";
import {useSelector} from "react-redux";
import {RootState} from "../../../reducers";
import {itemWeather, weatherApi} from "../../../types/weatherApi";
import {DAYS, DAYS_SUNDAY} from "../../../types/Days";
import {useEffect, useState} from "react";
interface Props {
    isToday: boolean
}

export const DailyDetail = () => {
    const weatherArray = useSelector<RootState, weatherApi>(state => state.weather);
    const [showDate, setShowDate] = useState(new Date());
    const actualDate = new Date();
    const [icon, setIcon] = useState('01n');
    const [info, setInfo] = useState<itemWeather | undefined>(undefined);
    let daysArray = Object.entries(DAYS_SUNDAY);
    useEffect(() => {
        let newListWeather: itemWeather[] = []
        newListWeather = [...weatherArray.list]
        newListWeather = newListWeather.filter(value => {
            return value.dt_txt.substring(0, 10) === weatherArray.daily
        })
        const getHour = () => {
            const actualDate = new Date();
            let comparationWeather: number[] = []
            newListWeather.forEach((value, index) => {
                const dateMilis = new Date(value.dt_txt).getTime();
                const result = Math.abs(dateMilis-actualDate.getTime())
                comparationWeather.push(result);
            })
            let bestValue = 999999999999999
            let bestIndex = 0
            comparationWeather.forEach((value, index) => {
                if (bestValue > value){
                    bestValue = value
                    bestIndex = index
                }
            })
            try{
                setShowDate(new Date(newListWeather[bestIndex].dt_txt))
                setInfo(newListWeather[bestIndex])
            }catch (e){
            }
        }
        getHour()
    },[weatherArray.daily, weatherArray])
    const showCloud = () => {
        if (info){
            try {
                return info.weather[0].description
            }catch (e){
                return 'Sun'
            }
        }else {
            return ''
        }
    }

    return <DetailContainer>
        <DayDetail>
            <TitleContainer>
                <TitleDirection>
                    Bogotá
                </TitleDirection>
                <Day>
                    {daysArray[showDate.getDay()][1]} {actualDate.toISOString().substring(0, 10)=== showDate.toISOString().substring(0, 10)? actualDate.getHours() +':00': ''}
                </Day>
                <Day>
                    {showCloud()}
                </Day>
            </TitleContainer>
            <DataContainer>
                <IconTemperatureContainer>
                    <ImageIconContainer>
                        <ImageIcon src={info ? `http://openweathermap.org/img/wn/${icon}@2x.png`: ''}/>
                    </ImageIconContainer>
                    <TemperatureContainer>
                        <Temperature>{info ? info.main.temp: ''}</Temperature>
                        <Degrees>°C</Degrees>
                    </TemperatureContainer>
                </IconTemperatureContainer>
                <InfoAndChangesContainer>
                    <Data>
                        Precipitation: 20 %
                    </Data>
                    <Data>
                        Humidity: {info ? info.main.humidity : ''} %
                    </Data>
                    <Data>
                        Wind:  {info ?(Math.round(info.wind.speed*3.6 * 100) / 100).toFixed(2): ''} km/h
                    </Data>
                </InfoAndChangesContainer>
            </DataContainer>
        </DayDetail>
        <GraphicDetail>
        </GraphicDetail>
    </DetailContainer>
}
