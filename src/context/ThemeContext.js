import React from 'react'

import {CgGames} from 'react-icons/cg'
import {RiSaveLine} from 'react-icons/ri'
import {AiOutlineHome, AiOutlineFire} from 'react-icons/ai'

const initialMenuList = [
  {
    id: 'home',
    icon: <AiOutlineHome />,
    text: 'Home',
    link: '/',
  },
  {
    id: 'trend',
    icon: <AiOutlineFire />,
    text: 'Trending',
    link: '/trending',
  },
  {
    id: 'game',
    icon: <CgGames />,
    text: 'Gaming',
    link: '/gaming',
  },
  {
    id: 'save',
    icon: <RiSaveLine />,
    text: 'Saved Videos',
    link: '/saved-videos',
  },
]
const ThemeContext = React.createContext({
  isSaved: false,
  darkThemeActivated: false,
  menuList: initialMenuList,
  selectedMenuItem: () => {},
  activeMenuItem: initialMenuList[0].id,
  toggleTheme: () => {},
  savedVideosList: [],
  toggleIsSaved: () => {},
  addSavedVideos: () => {},
})

export default ThemeContext
