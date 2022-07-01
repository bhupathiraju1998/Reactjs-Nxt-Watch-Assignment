import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {VscDebugStackframeDot} from 'react-icons/vsc'
import {
  TrendingVideoItem,
  TrendingVideoImage,
  TrendingVideoItemDetails,
  ItemHeading,
  ItemName,
  ItemViews,
  ViewsDate,
} from './StyledComponents'

import './index.css'

const TrendingVideo = props => {
  const {eachVideo} = props

  return (
    <Link to={`/videos/${eachVideo.id}`} className="link-item">
      <TrendingVideoItem>
        <TrendingVideoImage
          src={eachVideo.thumbnailUrl}
          alt="video thumbnail"
        />
        <TrendingVideoItemDetails>
          <ItemHeading>{eachVideo.title}</ItemHeading>
          <ItemName>{eachVideo.name}</ItemName>
          <ViewsDate>
            <ItemViews>{eachVideo.viewCount} views</ItemViews>
            <VscDebugStackframeDot />
            <ItemViews>
              {formatDistanceToNow(new Date(eachVideo.publishedAt))}
            </ItemViews>
          </ViewsDate>
        </TrendingVideoItemDetails>
      </TrendingVideoItem>
    </Link>
  )
}

export default TrendingVideo
