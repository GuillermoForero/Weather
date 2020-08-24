import styled, {keyframes} from 'styled-components';

export const ContainerCard = styled('div')`
  width: 75px;
  height: 92px;
  
  display: grid;
  cursor: pointer;
  grid-template-columns: 1fr;
  grid-template-rows: 22.5px 45px 22.5px;
  &.selected{
    background-color: #fcfcfc;
    border: 1px solid #eaeaea;
  }
`

export const DayTitle = styled('h4')`
  color: #aaaaaa;
  font-size: 14px;
  text-align: center;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 4px 0 0;
  height: 100%;
`
export const ContainerImg = styled('div')`
  width: 100%;
  height: 100%;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
`

export const ImageWeather = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ContainerTemperature = styled('div')`
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
  height: 100%;
`

export const TempMax = styled('span')`
  color: #848484;
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
`

export const TempMin = styled('span')`
  color: #a7a7a7;
  font-size: 14px;
  font-weight: 600;
`
