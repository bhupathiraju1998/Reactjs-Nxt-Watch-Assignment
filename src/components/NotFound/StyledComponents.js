import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.theme ? '#212121' : '#f1f5f9')};
`
export const NotFoundImage = styled.img`
  width: 200px;
  height: 200px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.theme ? '#ffffff' : '#475569')};
  font-size: 16px;
`
export const NotFoundParagraph = styled.p`
  font-size: 16px;
  color: ${props => (props.theme ? '#ffffff' : '#94a3b8')};
  font-family: 'Roboto';
`
