import {Link, withRouter} from 'react-router-dom'

import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgDarkMode} from 'react-icons/cg'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import ThemeContext from '../../context/ThemeContext'
import {
  NavMenu,
  NavLink,
  LogoutBtn,
  NavLinkMenuLogout,
  NavLinkProfile,
  Navbar,
  HeaderLogo,
  HeaderProfile,
  PopUpContainer,
  PopUpText,
  PopUpButtons,
  CancelButton,
  ConfirmButton,
} from './StyledComponents'
import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkThemeActivated, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }

      const {history} = props

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const navbarBgClassName = darkThemeActivated
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'

      const iconBgColor = darkThemeActivated
        ? 'header-icon-bg-light'
        : 'header-icon-bg-dark'

      const headerLogo = darkThemeActivated
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <Navbar className={navbarBgClassName}>
          <Link to="/">
            <HeaderLogo src={headerLogo} alt="website logo" />
          </Link>
          <NavMenu>
            <NavLink data-testid="theme" onClick={onToggleTheme}>
              <CgDarkMode className={`header-icon ${iconBgColor}`} />
            </NavLink>
            <Link to="/">
              <NavLink>
                <NavLinkMenuLogout>
                  <GiHamburgerMenu className={`header-icon ${iconBgColor}`} />
                </NavLinkMenuLogout>
              </NavLink>
              <NavLinkProfile>
                <HeaderProfile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavLinkProfile>
            </Link>
            <Popup
              trigger={
                <NavLink>
                  <NavLinkMenuLogout>
                    <FiLogOut className={`header-icon ${iconBgColor}`} />
                  </NavLinkMenuLogout>
                  <LogoutBtn>Logout</LogoutBtn>
                </NavLink>
              }
            >
              {close => (
                <PopUpContainer>
                  <PopUpText>Are you sure you want to log out?</PopUpText>
                  <PopUpButtons>
                    <CancelButton onClick={() => close()} testid="closeButton">
                      Cancel
                    </CancelButton>
                    <ConfirmButton onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </PopUpButtons>
                </PopUpContainer>
              )}
            </Popup>
          </NavMenu>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
