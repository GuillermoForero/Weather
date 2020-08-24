import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { GlobalStyle } from './styles/GlobalStyles'
import {Principal} from "./components/counter/principal";
import {Card} from "./components/socialCard/Card";
import {MainSocialCard} from "./components/socialCard/mainSocialCard";
import {DayCard} from "./components/weather/dayCard";
import {MainWeather} from "./components/weather/mainWeather";
import {useEffect} from "react";
import allActions from "./actions/allActions";
import {useDispatch} from "react-redux";
import {GraphicDay} from "./components/weather/graphicDay";
export const App = () => {
    const dispatch = useDispatch()
        useEffect(() => {
            const date = new Date()
            console.log()
            dispatch(allActions.weatherActions.getData())
            dispatch(allActions.weatherActions.changeDay(date.toISOString().substring(0, 10)))
        });
    return <BrowserRouter>
        <GlobalStyle/>
        <Switch>
            <Route exact path={"/"}>
                <MainWeather/>
                {/*<GraphicDay/>*/}
            </Route>
        </Switch>
    </BrowserRouter>
};
