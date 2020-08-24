import * as React from 'react';
import {ButtonCounter} from "./styles";
import {useDispatch} from "react-redux";
import allActions from "../../../actions/allActions";
interface Props {
    text: string,
    type: number
}
export const Button = (props: Props) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        switch (props.type){
            case 0: {
                dispatch(allActions.counterActions.increment())
                break;
            }
            case 1: {
                dispatch(allActions.counterActions.decrement())
                break;
            }case 2: {
                dispatch(allActions.counterActions.reset())
                break;
            }
        }
    }
    return <ButtonCounter onClick={handleClick}>{props.text}</ButtonCounter>
}
