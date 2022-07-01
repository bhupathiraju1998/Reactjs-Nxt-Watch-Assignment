import styled from 'styled-components'

export const HomeBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  width: 65vw;
`

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65vw;
  @media (min-width: 576px) and (max-width: 768px) {
    min-width: 576px;
    max-width: 768px;
  }
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
`

export const HomeLogo = styled.img`
  width: 150px;
  height: 40px;
  @media (min-width: 576px) and (max-width: 768px) {
    width: 250px;
    height: 60px;
  }
`

export const CloseIcon = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 20px;
`

export const CustomBannerButton = styled.button`
  background-color: transparent;
  color: #64748b;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding: 5px;
  width: 150px;
`

export const BannerText = styled.p`
  color: #1e293b;
  font-size: 18px;
  font-family: 'Roboto';
  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 22px;
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 100vh;
`

export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding-top: 10px;
  margin: 10px;
  @media (min-width: 576px) and (max-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const SearchInput = styled.input`
  color: #181818;
  font-family: 'Roboto';
  font-size: 12px;
  padding: 10px;
  width: 80%;
  height: 37px;
`

export const SearchButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  width: 58px;
  height: 37px;
  cursor: pointer;
  padding: 8px;
`

export const VideoDataList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
`

export const NoSearchNoResultFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
`

export const NoSearchImage = styled.img`
  width: 200px;
  height: 200px;
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

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MBVContainer = styled.div`
  display: flex;
  width: 30vw;
`

export const HomeVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
