import styled, {keyframes} from 'styled-components';

export const DetailContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 70% 30%;
`
export const DayDetail = styled('div')`
  display: grid;
  grid-template-rows: 40% 60%;
`
export const TitleContainer = styled('div')`
    margin-top: 10px;
    margin-left: 10px;
`
export const DataContainer = styled('div')`
  margin-right: 10px;
  padding-top: 20px;
  display: grid;
  grid-template-columns: 60% 40%;
  
`
export const IconTemperatureContainer = styled('div')`
  display: flex;
  align-items: start;
`
export const ImageIconContainer = styled('div')`
  width: 50px;
  height: 50px;
  margin-top: 5px;
`
export const ImageIcon = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const TemperatureContainer = styled('div')`
  display: flex;
`
export const Temperature = styled('h2')`
  font-size: 40px;
  font-weight: 500;
  margin: 0;
`
export const Degrees = styled('h2')`
  font-weight: 400;
  font-size: 15px;
`
export const InfoAndChangesContainer = styled('div')`
  display: flex;
  flex-direction: column;
`
export const Data = styled('span')`
  color: #888888;
  font-weight: 400;
  font-size: 15px;
`
export const TitleDirection = styled('h2')`
  color: #888888;
  font-weight: 500;
  font-size: 22px;
`

export const Day = styled('p')`
  color: #888888;
  font-weight: 400;
  font-size: 15px;
  margin: 0 0 2px;
  height: 15px;
`

export const GraphicDetail = styled('div')`
`
