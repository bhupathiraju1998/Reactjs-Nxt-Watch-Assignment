import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SavedVideosMenuListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const GamingBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
  padding-left: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  height: 20vh;
  margin-bottom: 0px;
`
export const GamingIcon = styled.div`
  background-color: #d7dfe9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 70px;
  height: 70px;
`
export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  color: #383838;
  font-weight: bold;
  margin-left: 20px;
`

export const SavedVideosListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65vw;
  background-color: #f1f5f9;
`
export const SavedVideoPageList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 65vw;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedImage = styled.img`
  width: 200px;
  height: 200px;
`
export const NoSavedTitle = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 24px;
`
export const NoSavedText = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 18px;
`
