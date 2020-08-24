import styled, {keyframes} from 'styled-components';


export const MainContainer = styled('div')`
  width: 560px;
  height: 490px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 10% 90%;
  border-top: 1px solid #e1ebf3;
  border-bottom: 1px solid #e1ebf3;
  padding-top: 10px;
  position: absolute;
  top: 100px;
  left: 500px;
`

export const ContainerRight = styled('div')`
  grid-column-start: 2;
  grid-column-end: 3;
`

export const ContainerLeft = styled('div')`
  grid-column-start: 1;
  grid-column-end: 2;
`
export const ContainerTitle = styled('div')`
  display: flex;
  align-items: center;
`

export const ImageProfile = styled('img')`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 100px;
  margin-top: 6px;
`

export const TitlePost = styled('h2')`
  color: black;
  font-weight: bold;
  font-size: 17px;
`

export const AdditionalData = styled('p')`
  font-size: 15px;
  color: #9da7af;
  font-weight: 500;
`
export const Description = styled('p')`
  font-weight: 400;
  font-size: 15px;
  color: black;
  margin-bottom: 10px;
`
export const ContainerIcons = styled('div')`
  display: flex;
  margin-top: 12px;
`

export const IconMessage = styled('button')`
  color: #7f8e9a;
  margin-right: 45px;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`
export const IconRetweet = styled('button')`
  color: #7f8e9a;
  margin-right: 45px;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &.green{
    color: #2ac470;
  }
  &:hover{
    color: #31da7e;
  }
`
export const IconLike = styled('button')`
  color: #7f8e9a;
  margin-right: 45px;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  
  &.red{
    color: #e0245e;
  }
  
  &:hover{
    color: #ed316b;
  }
`
export const Icon = styled('button')`
  color: #7f8e9a;
  margin-right: 45px;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`

export const TextIcon = styled('span')`
  margin-left: 10px;
`
