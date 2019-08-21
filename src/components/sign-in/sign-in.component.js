import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions'

import {Wrapper, Title, Buttons} from './sign-in.styles'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const { value, name } = event.target
    setCredentials( {...userCredentials, [name]: value })
  }

  return (
    <Wrapper>
      <Title>I already have an account</Title>
      <span>Sing in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <Buttons>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart}
                        isGoogleSignIn>Sign in with Google</CustomButton>
        </Buttons>
      </form>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({
    email,
    password
  }))
})

export default connect(null, mapDispatchToProps)(SignIn)
