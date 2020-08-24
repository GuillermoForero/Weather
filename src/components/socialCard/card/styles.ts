import styled, {keyframes} from 'styled-components';

export const Container = styled('div')`
  height: 360px;
  width: 500px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #e8eef1;
`
export const ContainerImage = styled('div')`
  width: 100%;
  height: 75%;
  border-radius: inherit;
`
export const ContainerText = styled('div')`
  margin-left: 20px;
  margin-top: 12px;
`

export const Image = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
`

export const Title = styled('h3')`
  font-weight: bold;
  font-size: 17px;
`

export const Description = styled('p')`
  font-size: 15px;
`

export const Link = styled('a')`
  color: #9da7af;
  font-size: 15px;
`
