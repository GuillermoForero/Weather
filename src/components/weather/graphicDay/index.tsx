import * as React from "react";
import * as Recharts from "recharts";
import {useSelector} from "react-redux";
import {RootState} from "../../../reducers";
import {itemWeather, weatherApi} from "../../../types/weatherApi";
import {useEffect, useState} from "react";
interface result {
    hour: string
    grades: number
}

export const GraphicDay = () => {
    const weatherArray = useSelector<RootState, weatherApi>(state => state.weather);
    const [dataWeather, setDataWeather] = useState<result[]>([]);
    useEffect(() => {
        const day = weatherArray.daily;
        const tempArray: result[] = []
        weatherArray.list.forEach(item => {
            if (item.dt_txt.substring(0, 10) === day){
                const date = new Date(item.dt_txt)
                tempArray.push({grades: item.main.temp, hour: date.getHours().toString()})
            }
        })
        setDataWeather(tempArray)
    }, [weatherArray.daily, weatherArray.list])
    return (
        <Recharts.AreaChart
            width={540}
            height={90}
            data={dataWeather}
            margin={{
                top: 10, right: 30, left: 0, bottom: 0,
            }}
        >
            <Recharts.CartesianGrid strokeDasharray="3 3" />
            <Recharts.XAxis dataKey="hour" />
            <Recharts.YAxis dataKey="grades"/>
            <Recharts.Tooltip />
            <Recharts.Area type="monotone" dataKey="grades" stroke="#ffce08" fill="#fff5cc" />
        </Recharts.AreaChart>
    );
}
