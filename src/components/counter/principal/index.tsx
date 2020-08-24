import * as React from 'react';
import {Counter} from "./styles";
import {Button} from "../button";
import {useSelector} from "react-redux";
import {RootState} from "../../../reducers";
export const Principal = () => {
    const counter = useSelector<RootState, {counter: number}>(state => state.counter);
    console.log(counter)
    return <React.Fragment>
        <Counter>{counter.counter}</Counter>
        <Button text={'+'} type={0}/>
        <Button text={'-'} type={1}/>
        <Button text={'Reset'} type={2}/>
    </React.Fragment>

}
