import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 80vw;
  @media (min-width: 576px) and (max-width: 768px) {
    min-width: 576px;
    max-width: 768px;
  }
`

export const HeaderLogo = styled.img`
  width: 100px;
  height: 20px;
  margin-left: 10px;
  margin-right: 30px;
  @media (min-width: 576px) and (max-width: 768px) {
    width: 150px;
    height: 30px;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
  margin-left: 30px;
`

export const NavLink = styled.li`
  margin-right: 20px;
  border: none;
  background-color: transparent;
  outline: none;
`

export const NavLinkMenuLogout = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavLinkProfile = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HeaderProfile = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

export const LogoutBtn = styled.button`
  border: 1px solid #3b82f6;
  color: #3b82f6;
  padding: 5px;
  font-size: 14px;
  font-family: 'Roboto';
  width: 100px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: transparent;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const PopUpContainer = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
`
export const PopUpText = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
`
export const PopUpButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const CancelButton = styled.button`
  border: 1px solid #64748b;
  background-color: transparent;
  color: #64748b;
  font-family: 'Roboto';
  outline: none;
  padding: 10px;
  margin-right: 10px;
`
export const ConfirmButton = styled.button`
  border-radius: 5px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  padding: 10px;
  border: none;
  outline: none;
  margin-left: 10px;
`
