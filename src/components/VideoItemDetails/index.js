import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {VscDebugStackframeDot, VscNewFolder} from 'react-icons/vsc'
import {BiDislike} from 'react-icons/bi'
import {AiOutlineLike} from 'react-icons/ai'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {
  VideoItemDetailsContainer,
  VideoItemDetailsPageView,
  NoSearchNoResultFoundContainer,
  NoSearchImage,
  NoSearchHeadingText,
  NoSearchParagraphText,
  CustomRetryButton,
  SpecificVideoItemDetailContainer,
  VideoTitle,
  DetailsContainer,
  Text,
  ViewsDataLikeContainer,
  FavouriteContainer,
  CustomButton,
  VideoChannelDetailsContainer,
  ChannelDetails,
  ChannelImage,
  ChannelNameSub,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './StyledComponents'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Menu from '../Menu'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoItemDetails: {},
    like: false,
    unLike: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getFormattedData = data => ({
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    description: data.description,
    name: data.channel.name,
    profileImageUrl: data.channel.profile_image_url,
    subscriberCount: data.channel.subscriber_count,
    viewCount: data.view_count,
    publishedAt: data.published_at,
    isSaved: false,
  })

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = this.getFormattedData(fetchedData.video_details)
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickVideoItemRoute = () => {
    this.getVideoItemDetails()
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
          We are having some trouble to complete your request. Please try again.
        </NoSearchParagraphText>
        <CustomRetryButton onClick={this.onClickVideoItemRoute}>
          Retry
        </CustomRetryButton>
      </NoSearchNoResultFoundContainer>
    )
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onClickLikeButton = () => {
    this.setState(prevState => ({
      like: !prevState.like,
      unLike: false,
    }))
  }

  onClickDisLikeButton = () => {
    this.setState(prevState => ({
      unLike: !prevState.unLike,
      like: false,
    }))
  }

  renderVideoDetails = () => (
    <ThemeContext.Consumer>
      {value => {
        const {videoItemDetails, like, unLike} = this.state
        const {
          addSavedVideos,
          darkThemeActivated,
          isSaved,
          toggleIsSaved,
        } = value

        console.log(isSaved)
        console.log(darkThemeActivated)
        const onClickSaveVideo = () => {
          toggleIsSaved()
          addSavedVideos(videoItemDetails)
        }

        const likeButtonClassName = like ? 'color-btn' : 'dark-text'
        const unlikeButtonClassName = unLike ? 'color-btn' : 'dark-text'
        const saveBtnClassName = isSaved ? 'color-btn' : 'dark-text'
        const savedText = isSaved ? 'saved' : 'save'

        return (
          <DetailsContainer>
            <ViewsDataLikeContainer>
              <Text>{videoItemDetails.viewCount}</Text>
              <VscDebugStackframeDot className="dot-icon" />
              <Text>
                {formatDistanceToNow(new Date(videoItemDetails.publishedAt))}
              </Text>
            </ViewsDataLikeContainer>
            <FavouriteContainer>
              <ViewsDataLikeContainer>
                <CustomButton onClick={this.onClickLikeButton}>
                  <AiOutlineLike className={`${likeButtonClassName} icon`} />
                  <Text className={likeButtonClassName}>Like</Text>
                </CustomButton>
              </ViewsDataLikeContainer>
              <ViewsDataLikeContainer>
                <CustomButton onClick={this.onClickDisLikeButton}>
                  <BiDislike className={`${unlikeButtonClassName} icon`} />
                  <Text className={unlikeButtonClassName}>Dislike</Text>
                </CustomButton>
              </ViewsDataLikeContainer>
              <ViewsDataLikeContainer>
                <CustomButton onClick={onClickSaveVideo}>
                  <VscNewFolder className={`${saveBtnClassName} icon`} />
                  <Text className={saveBtnClassName}>{savedText}</Text>
                </CustomButton>
              </ViewsDataLikeContainer>
            </FavouriteContainer>
          </DetailsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoChannelDetails = () => {
    const {videoItemDetails} = this.state
    return (
      <VideoChannelDetailsContainer>
        <ChannelDetails>
          <ChannelImage
            src={videoItemDetails.profileImageUrl}
            alt="channel logo"
          />
          <ChannelNameSub>
            <ChannelName>{videoItemDetails.name}</ChannelName>
            <ChannelSubscribers>
              {videoItemDetails.subscriberCount} subscribers
            </ChannelSubscribers>
          </ChannelNameSub>
        </ChannelDetails>
        <ChannelDescription>{videoItemDetails.description}</ChannelDescription>
      </VideoChannelDetailsContainer>
    )
  }

  renderVideoItemPage = () => {
    const {videoItemDetails} = this.state

    return (
      <SpecificVideoItemDetailContainer>
        <ReactPlayer url={videoItemDetails.videoUrl} />
        <VideoTitle>{videoItemDetails.title}</VideoTitle>
        {this.renderVideoDetails()}
        <hr className="hr-line" />
        {this.renderVideoChannelDetails()}
      </SpecificVideoItemDetailContainer>
    )
  }

  renderVideoDetailsPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemPage()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailurePage()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoItemDetailsContainer data-testid="videoItemDetails">
          <Menu />
          <VideoItemDetailsPageView>
            {this.renderVideoDetailsPage()}
          </VideoItemDetailsPageView>
        </VideoItemDetailsContainer>
      </>
    )
  }
}

export default VideoItemDetails
