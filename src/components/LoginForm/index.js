import {Redirect, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  FormContainer,
  NxtWatchLogo,
  FormInputContainer,
  CheckboxContainer,
  InputContainer,
  ShowPwdLabel,
  LoginButton,
  InputField,
  ErrorMessage,
} from './StyledComponents'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
    console.log(errorMsg)
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangePasswordField = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  renderPasswordField = darkThemeActivated => {
    const {password, showPassword} = this.state
    const type = showPassword ? 'text' : 'password'
    const labelClassName = darkThemeActivated ? 'label-dark' : 'label-light'
    return (
      <>
        <label htmlFor="password" className={`${labelClassName} labelTheme`}>
          PASSWORD
        </label>
        <InputField
          type={type}
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = darkThemeActivated => {
    const {username} = this.state
    const labelClassName = darkThemeActivated ? 'label-dark' : 'label-light'
    return (
      <>
        <label htmlFor="username" className={`${labelClassName} labelTheme`}>
          USERNAME
        </label>
        <InputField
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderCheckBoxField = () => {
    const {showPassword} = this.state
    return (
      <CheckboxContainer>
        <InputField
          type="checkbox"
          id="showPwd"
          checked={showPassword}
          onChange={this.onChangePasswordField}
        />
        <ShowPwdLabel htmlFor="showPwd">Show Password</ShowPwdLabel>
      </CheckboxContainer>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkThemeActivated} = value
          const loginBgClassName = darkThemeActivated
            ? 'login-bg-dark'
            : 'login-bg-light'
          const imageUrl = darkThemeActivated
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <div className={`loginFormContainer ${loginBgClassName}`}>
              <FormContainer>
                <NxtWatchLogo
                  src={imageUrl}
                  className="nxt-wave-logo"
                  alt="website logo"
                />
                <FormInputContainer onSubmit={this.submitForm}>
                  <InputContainer>
                    {this.renderUsernameField(darkThemeActivated)}
                  </InputContainer>
                  <InputContainer>
                    {this.renderPasswordField(darkThemeActivated)}
                  </InputContainer>
                  <div>{this.renderCheckBoxField()}</div>
                  <LoginButton type="submit" className="login-button">
                    Login
                  </LoginButton>
                  {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
                </FormInputContainer>
              </FormContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(LoginForm)
