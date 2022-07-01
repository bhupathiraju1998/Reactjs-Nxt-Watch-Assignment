import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
} from './StyledComponents'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkThemeActivated} = value
      const imageUrl = darkThemeActivated
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer theme={darkThemeActivated}>
          <NotFoundImage src={imageUrl} alt="not found" />
          <NotFoundHeading>Page Not Found</NotFoundHeading>
          <NotFoundParagraph>
            We are sorry, the page you requested could not be found
          </NotFoundParagraph>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
