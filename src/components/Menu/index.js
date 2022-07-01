import {Component} from 'react'

import MenuItem from '../MenuItem'
import {
  MenuContainer,
  MenuPageView,
  MenuContactUsContainer,
  ContactHeading,
  SocialMediaContainer,
  Logo,
  ContactUsText,
} from './StyledComponents'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Menu extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkThemeActivated, activeMenuItem, menuList} = value
          const MenuBgColorClassName = darkThemeActivated
            ? 'bg-dark'
            : 'bg-light'

          return (
            <MenuPageView className={MenuBgColorClassName}>
              <MenuContainer>
                {menuList.map(eachMenu => (
                  <MenuItem
                    eachMenu={eachMenu}
                    key={eachMenu.id}
                    isActive={activeMenuItem === eachMenu.id}
                    selectedMenuItem={this.selectedMenuItem}
                    darkThemeActivated={darkThemeActivated}
                  />
                ))}
              </MenuContainer>
              <MenuContactUsContainer>
                <ContactHeading>CONTACT US</ContactHeading>
                <SocialMediaContainer>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContainer>
                <ContactUsText>
                  Enjoy! Now to see your
                  <br /> channels and recommendations!
                </ContactUsText>
              </MenuContactUsContainer>
            </MenuPageView>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Menu
