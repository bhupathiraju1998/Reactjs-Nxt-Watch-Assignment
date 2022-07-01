import styled from 'styled-components'

export const TrendingVideosPageView = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const TrendingVideosPage = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const TrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
`

export const NoSearchNoResultFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSearchHeadingText = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;
`
export const NoSearchParagraphText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
`

export const CustomRetryButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  border-radius: 10px;
  background-color: #4f46e5;
  border: none;
  outline: none;
  font-size: 14px;
  margin: 10px;
  padding: 10px;
`
export const NoSearchImage = styled.img`
  width: 200px;
  height: 200px;
`
export const TrendingBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
  padding-left: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  height: 20vh;
  width: 60vw;
  margin-bottom: 0px;
`
export const TrendingIcon = styled.div`
  background-color: #d7dfe9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 70px;
  height: 70px;
`
export const TrendingTitle = styled.h1`
  font-family: 'Roboto';
  color: #383838;
  font-weight: bold;
  margin-left: 20px;
`

export const TrendingVideosList = styled.ul`
  list-style-type: none;
  background-color:  ${props => (props.outline ? '#0f0f0f' : '#f1f5f9')}
  margin-top: 0px;
`
