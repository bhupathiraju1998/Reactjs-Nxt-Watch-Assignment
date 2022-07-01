import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {CgGames} from 'react-icons/cg'
import {RiSaveLine} from 'react-icons/ri'
import {AiOutlineHome, AiOutlineFire} from 'react-icons/ai'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'
import './App.css'

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

// Replace your code here
class App extends Component {
  state = {
    darkThemeActivated: false,
    isSaved: false,
    savedVideosList: [],
    menuList: initialMenuList,
    activeMenuItem: initialMenuList[0].id,
  }

  addSavedVideos = video => {
    const {savedVideosList} = this.state
    const videoObject = savedVideosList.find(each => each.id === video.id)
    console.log(videoObject)
    if (videoObject) {
      return null
    }

    return this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, video],
    }))
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      darkThemeActivated: !prevState.darkThemeActivated,
    }))
  }

  toggleIsSaved = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  selectedMenuItem = id => {
    this.setState({activeMenuItem: id})
  }

  render() {
    const {
      darkThemeActivated,
      savedVideosList,
      activeMenuItem,
      menuList,
      isSaved,
    } = this.state
    console.log(savedVideosList)
    return (
      <ThemeContext.Provider
        value={{
          darkThemeActivated,
          toggleTheme: this.toggleTheme,
          toggleIsSaved: this.toggleIsSaved,
          addSavedVideos: this.addSavedVideos,
          selectedMenuItem: this.selectedMenuItem,
          activeMenuItem,
          savedVideosList,
          menuList,
          isSaved,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
