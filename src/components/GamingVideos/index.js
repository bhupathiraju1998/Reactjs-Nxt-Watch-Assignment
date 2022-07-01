import {Link} from 'react-router-dom'
import {
  GameItemContainer,
  GameImage,
  GameViews,
  GameName,
} from './StyledComponents'
import './index.css'

const GamingVideos = props => {
  const {eachVideo} = props
  return (
    <Link to={`/videos/${eachVideo.id}`} className="link-item">
      <GameItemContainer>
        <GameImage src={eachVideo.thumbnailUrl} alt="video thumbnail" />
        <GameName>{eachVideo.title}</GameName>
        <GameViews>{eachVideo.viewsCount} Watching World Wide</GameViews>
      </GameItemContainer>
    </Link>
  )
}

export default GamingVideos
