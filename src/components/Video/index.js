import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

import './index.css'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoImage,
  VideoItemContainer,
  VideoProfileContainer,
  VideoListItem,
  ProfileImage,
  NameCountYearContainer,
  NameContainer,
  Name,
  ViewsDateContainer,
  ViewDate,
  Title,
} from './StyledComponents'

import ThemeContext from '../../context/ThemeContext'

const Video = props => (
  <ThemeContext.Consumer>
    {value => {
      const {eachVideo} = props
      const {darkThemeActivated} = value
      const textClassName = darkThemeActivated ? 'title-dark' : 'title-light'
      const nameCountClassName = darkThemeActivated
        ? 'name-count-dark'
        : 'name-count-light'
      return (
        <Link to={`/videos/${eachVideo.id}`} className="link-item">
          <VideoListItem>
            <VideoItemContainer>
              <VideoImage src={eachVideo.thumbnailUrl} alt="video thumbnail" />
              <VideoProfileContainer>
                <ProfileImage
                  src={eachVideo.profileImageUrl}
                  alt="channel logo"
                />
                <Title className={textClassName}>{eachVideo.title}</Title>
              </VideoProfileContainer>
              <NameCountYearContainer>
                <NameContainer>
                  <Name className={nameCountClassName}>{eachVideo.name}</Name>
                </NameContainer>
                <ViewsDateContainer>
                  <ViewDate className={nameCountClassName}>
                    {eachVideo.viewCount} views
                  </ViewDate>
                  <ViewDate className={nameCountClassName}>
                    {' '}
                    <BsDot />
                    {formatDistanceToNow(new Date(eachVideo.publishedAt))}
                  </ViewDate>
                </ViewsDateContainer>
              </NameCountYearContainer>
            </VideoItemContainer>
          </VideoListItem>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default Video
