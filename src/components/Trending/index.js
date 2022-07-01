import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import {AiOutlineFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Menu from '../Menu'
import Header from '../Header'
import TrendingVideo from '../TrendingVideo'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingVideosContainer,
  TrendingVideosPageView,
  TrendingVideosPage,
  NoSearchNoResultFoundContainer,
  CustomRetryButton,
  NoSearchImage,
  NoSearchHeadingText,
  NoSearchParagraphText,
  TrendingBanner,
  TrendingIcon,
  TrendingTitle,
  TrendingVideosList,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrending()
  }

  getTrending = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        channel: eachVideo.channel,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
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
        <CustomRetryButton onClick={this.onClickTrendingRoute}>
          Retry
        </CustomRetryButton>
      </NoSearchNoResultFoundContainer>
    )
  }

  onClickTrendingRoute = () => {
    this.getTrending()
  }

  renderTrendingVideoPage = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkThemeActivated} = value
        const {trendingVideosList} = this.state
        const isTrendingFound = trendingVideosList.length > 0
        return isTrendingFound ? (
          <TrendingVideosContainer>
            <TrendingBanner data-testid="banner">
              <TrendingIcon>
                <AiOutlineFire className="fire-icon" />
              </TrendingIcon>
              <TrendingTitle>Trending</TrendingTitle>
            </TrendingBanner>
            <TrendingVideosList
              outline={darkThemeActivated}
              data-testid="trending"
            >
              {trendingVideosList.map(eachVideo => (
                <TrendingVideo eachVideo={eachVideo} key={eachVideo.id} />
              ))}
            </TrendingVideosList>
          </TrendingVideosContainer>
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
            <CustomRetryButton onClick={this.onClickTrendingRoute}>
              Retry
            </CustomRetryButton>
          </NoSearchNoResultFoundContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoading = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderTrendingPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideoPage()
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      case apiStatusConstants.failure:
        return this.renderFailurePage()
      default:
        return null
    }
  }

  render() {
    return (
      <TrendingVideosPageView>
        <Header />
        <TrendingVideosPage>
          <Menu />
          {this.renderTrendingPage()}
        </TrendingVideosPage>
      </TrendingVideosPageView>
    )
  }
}

export default Trending
