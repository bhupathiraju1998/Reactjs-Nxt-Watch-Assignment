import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  SavedVideoListItem,
  SavedVideoImage,
  SavedVideoDetails,
  SavedVideoTitle,
  SavedVideoChannel,
  ViewsDateContainer,
  ViewDate,
} from './StyledComponents'
import './index.css'

const SavedVideosItem = props => {
  const {eachVideo} = props

  return (
    <Link to={`/videos/${eachVideo.id}`} className="link-item">
      <SavedVideoListItem>
        <SavedVideoImage src={eachVideo.thumbnailUrl} alt="video thumbnail" />
        <SavedVideoDetails>
          <SavedVideoTitle>{eachVideo.title}</SavedVideoTitle>
          <SavedVideoChannel>{eachVideo.name}</SavedVideoChannel>
          <ViewsDateContainer>
            <ViewDate>{eachVideo.viewCount} views</ViewDate>
            <ViewDate>
              {' '}
              <BsDot />
              {formatDistanceToNow(new Date(eachVideo.publishedAt))}
            </ViewDate>
          </ViewsDateContainer>
        </SavedVideoDetails>
      </SavedVideoListItem>
    </Link>
  )
}

export default SavedVideosItem
