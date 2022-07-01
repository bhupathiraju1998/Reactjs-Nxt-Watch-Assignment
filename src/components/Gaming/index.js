import {Component} from 'react'
import Cookies from 'js-cookie'
import {CgGames} from 'react-icons/cg'
import Loader from 'react-loader-spinner'
import {
  GamingVideosPageView,
  GamingVideosPageContainer,
  GamePageContainer,
  GamingBanner,
  GamingIcon,
  GamingTitle,
  GamingVideosList,
  NoSearchNoResultFoundContainer,
  NoSearchImage,
  NoSearchHeadingText,
  NoSearchParagraphText,
  CustomRetryButton,
} from './StyledComponents'

import './index.css'
import Header from '../Header'
import Menu from '../Menu'
import GamingVideos from '../GamingVideos'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamesList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(eachGame => ({
        id: eachGame.id,
        title: eachGame.title,
        thumbnailUrl: eachGame.thumbnail_url,
        viewsCount: eachGame.view_count,
      }))
      this.setState({
        gamesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderLoading = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderGameVideoView = () => {
    const {gamesList} = this.state
    const isGamingFound = gamesList.length > 0
    return isGamingFound ? (
      <GamingVideosPageView>
        <GamingBanner>
          <GamingIcon>
            <CgGames className="fire-icon" />
          </GamingIcon>
          <GamingTitle>Gaming</GamingTitle>
        </GamingBanner>
        <GamingVideosList>
          {gamesList.map(eachVideo => (
            <GamingVideos eachVideo={eachVideo} key={eachVideo.id} />
          ))}
        </GamingVideosList>
      </GamingVideosPageView>
    ) : (
      <NoSearchNoResultFoundContainer>
        <NoSearchImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchHeadingText>No Search Results Found</NoSearchHeadingText>
        <NoSearchParagraphText>
          Try different key words or remove search filter
        </NoSearchParagraphText>
        <CustomRetryButton>Retry</CustomRetryButton>
      </NoSearchNoResultFoundContainer>
    )
  }

  onClickGamingRouteBtn = () => {
    this.getGamingVideos()
  }

  renderFailurePage = darkThemeActivated => {
    const failureImageUrl = darkThemeActivated
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

    const noSearchResultsClassName = darkThemeActivated
      ? 'no-search-light'
      : 'no-search-dark'

    return (
      <NoSearchNoResultFoundContainer>
        <NoSearchImage src={failureImageUrl} alt="failure view" />
        <NoSearchHeadingText className={noSearchResultsClassName}>
          Oops! Something Went Wrong
        </NoSearchHeadingText>
        <NoSearchParagraphText>
          We are having some trouble to complete your request.Please try again.
        </NoSearchParagraphText>
        <CustomRetryButton onClick={this.onClickGamingRouteBtn}>
          Retry
        </CustomRetryButton>
      </NoSearchNoResultFoundContainer>
    )
  }

  renderGameVideosPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGameVideoView()
      case apiStatusConstants.failure:
        return this.renderFailurePage()
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <GamingVideosPageView>
        <Header />
        <GamingVideosPageContainer>
          <Menu />
          <GamePageContainer>{this.renderGameVideosPage()}</GamePageContainer>
        </GamingVideosPageContainer>
      </GamingVideosPageView>
    )
  }
}

export default Gaming
