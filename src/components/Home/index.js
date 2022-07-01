import {Redirect} from 'react-router-dom'

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Video from '../Video'
import Menu from '../Menu'
import {
  HomePageContainer,
  CloseIcon,
  HomeLogo,
  BannerText,
  CustomBannerButton,
  BannerContainer,
  VideoDataList,
  HomeContainer,
  NoSearchImage,
  SearchInput,
  SearchInputContainer,
  NoSearchNoResultFoundContainer,
  CloseButton,
  SearchButton,
  NoSearchHeadingText,
  NoSearchParagraphText,
  CustomRetryButton,
  HomeBannerContainer,
  HomeBgContainer,
  MBVContainer,
  HomeVideoContainer,
} from './StyledComponents'

import './index.css'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    closeIcon: false,
    searchInput: '',
    videosData: {},
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        channel: eachVideo.channel,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        isSaved: false,
      }))

      this.setState({
        videosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickCloseIcon = () => {
    const {closeIcon} = this.state
    this.setState({closeIcon: !closeIcon})
  }

  renderHomeBanner = () => {
    const {closeIcon} = this.state
    const bannerClassName = closeIcon ? 'close-banner' : ''
    return (
      <HomeBannerContainer
        className={`banner-bg-container ${bannerClassName}`}
        data-testid="banner"
      >
        <CloseIcon>
          <CloseButton>
            <AiOutlineClose
              onClick={this.onClickCloseIcon}
              data-testid="close"
            />
          </CloseButton>
        </CloseIcon>
        <BannerContainer>
          <HomeLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerText>Buy Nxt Watch premium prepaid plans with UPI</BannerText>
          <CustomBannerButton type="button">GET IT NOW</CustomBannerButton>
        </BannerContainer>
      </HomeBannerContainer>
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchInput = () => {
    this.getHomeVideos()
  }

  renderSearchInput = () => (
    <SearchInputContainer>
      <SearchInput
        type="search"
        placeholder="Search"
        onChange={this.onChangeSearchInput}
      />
      <SearchButton
        type="button"
        className="search-btn"
        onClick={this.onClickSearchInput}
        data-testid="searchButton"
      >
        <AiOutlineSearch />
      </SearchButton>
    </SearchInputContainer>
  )

  renderHomeVideoView = darkThemeActivated => {
    const {videosData} = this.state
    const isDataFound = videosData.length > 0
    const noSearchResultsClassName = darkThemeActivated
      ? 'no-search-light'
      : 'no-search-dark'
    return isDataFound ? (
      <VideoDataList>
        {videosData.map(eachVideo => (
          <Video eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </VideoDataList>
    ) : (
      <NoSearchNoResultFoundContainer>
        <NoSearchImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchHeadingText className={noSearchResultsClassName}>
          No Search Results Found
        </NoSearchHeadingText>
        <NoSearchParagraphText>
          Try different key words or remove search filter
        </NoSearchParagraphText>
        <CustomRetryButton onClick={this.onClickRetryHomeRoute}>
          Retry
        </CustomRetryButton>
      </NoSearchNoResultFoundContainer>
    )
  }

  renderLoading = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onClickRetryHomeRoute = () => {
    this.getHomeVideos()
  }

  renderFailureView = darkThemeActivated => {
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
          We are having some trouble to complete your request. Please try again.
        </NoSearchParagraphText>
        <CustomRetryButton onClick={this.onClickRetryHomeRoute}>
          Retry
        </CustomRetryButton>
      </NoSearchNoResultFoundContainer>
    )
  }

  renderHomeVideoPage = darkThemeActivated => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideoView(darkThemeActivated)
      case apiStatusConstants.failure:
        return this.renderFailureView(darkThemeActivated)
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkThemeActivated} = value
          const homeBgClassName = darkThemeActivated ? 'bg-dark' : 'bg-light'
          return (
            <HomePageContainer>
              <Header />
              <MBVContainer>
                <Menu />
                <HomeVideoContainer>
                  {this.renderHomeBanner()}
                  <HomeBgContainer className={homeBgClassName}>
                    {this.renderSearchInput()}
                    <HomeContainer data-testid="home">
                      {this.renderHomeVideoPage(darkThemeActivated)}
                    </HomeContainer>
                  </HomeBgContainer>
                </HomeVideoContainer>
              </MBVContainer>
            </HomePageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
