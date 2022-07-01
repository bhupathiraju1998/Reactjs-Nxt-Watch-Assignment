import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 20px 30px #606060;
  border-radius: 10px;
`

export const NxtWatchLogo = styled.img`
  width: 150px;
  height: 50px;
  margin-top: 10px;
`

export const FormInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  padding: 10px;
  height: 50vh;
  @media screen and (min-width: 768px) {
    width: 30vw;
  }
`

export const CheckboxContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ShowPwdLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #616e7c;
  margin-bottom: 10px;
`

export const InputField = styled.input`
  color: #616e7c;
  font-family: 'Roboto';
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  border: 1px solid #64748b;
`

export const LoginButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  background-color: #3b82f6;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
`

export const ErrorMessage = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: 12px;
`
