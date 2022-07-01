import {RiSaveLine} from 'react-icons/ri'
import {
  SavedVideosContainer,
  SavedVideosMenuListContainer,
  SavedVideosListContainer,
  GamingBanner,
  GamingIcon,
  GamingTitle,
  SavedVideoPageList,
  NoSavedVideosContainer,
  NoSavedImage,
  NoSavedTitle,
  NoSavedText,
} from './StyledComponents'

import Menu from '../Menu'
import Header from '../Header'
import SavedVideosItem from '../SavedVideoItem'
import ThemeContext from '../../context/ThemeContext'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {savedVideosList} = value
      const savedVideosFound = savedVideosList.length > 0
      return (
        <SavedVideosContainer>
          <Header />
          <SavedVideosMenuListContainer>
            <Menu />
            <SavedVideosListContainer>
              <GamingBanner data-testid="banner">
                <GamingIcon>
                  <RiSaveLine className="fire-icon" />
                </GamingIcon>
                <GamingTitle>Saved Videos</GamingTitle>
              </GamingBanner>
              <SavedVideoPageList>
                {savedVideosFound ? (
                  savedVideosList.map(eachVideo => (
                    <SavedVideosItem eachVideo={eachVideo} key={eachVideo.id} />
                  ))
                ) : (
                  <NoSavedVideosContainer>
                    <NoSavedImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no videos"
                    />
                    <NoSavedTitle>No saved videos found</NoSavedTitle>
                    <NoSavedText>
                      You can save your videos while watching them
                    </NoSavedText>
                  </NoSavedVideosContainer>
                )}
              </SavedVideoPageList>
            </SavedVideosListContainer>
          </SavedVideosMenuListContainer>
        </SavedVideosContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
