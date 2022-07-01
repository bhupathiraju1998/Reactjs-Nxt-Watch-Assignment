import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 0px;
  width: 15vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuPageView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150vh;
  padding-left: 0px;
  width: 15vw;
`

export const MenuContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
`

export const ContactHeading = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 10px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
`
export const ContactUsText = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
`
