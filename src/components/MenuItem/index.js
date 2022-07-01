import './index.css'
import {Link} from 'react-router-dom'
import {MenuIconContainer, MenuName, Icon} from './StyledComponents'
import ThemeContext from '../../context/ThemeContext'

const MenuItem = props => {
  const {eachMenu, isActive} = props
  const {id} = eachMenu

  const activeMenuItemClassName = isActive
    ? 'active-item-bg-color'
    : 'inactive-item-bg-color'
  const activeIconClassName = isActive ? 'active-icon' : 'light-icon'
  const activeMenuClassName = isActive ? 'active-menu-item' : ''

  return (
    <ThemeContext.Consumer>
      {value => {
        const {selectedMenuItem} = value
        const onClickMenuItem = () => {
          selectedMenuItem(id)
        }
        return (
          <Link to={eachMenu.link} className="link">
            <MenuIconContainer
              className={activeMenuItemClassName}
              onClick={onClickMenuItem}
            >
              <Icon className={activeIconClassName}>{eachMenu.icon}</Icon>
              <MenuName className={activeMenuClassName}>
                {eachMenu.text}
              </MenuName>
            </MenuIconContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default MenuItem
