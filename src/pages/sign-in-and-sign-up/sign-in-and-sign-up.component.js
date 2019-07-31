import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import { SignInAndSingUpContainer } from './sign-in-and-sign-up.styles'

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSingUpContainer>
      <SignIn/>
      <SignUp/>
    </SignInAndSingUpContainer>
  )
}

export default SignInAndSignUpPage
