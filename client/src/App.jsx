import styled from '@emotion/styled'
import { Button, Container, Divider, Typography } from '@mui/material'
import bcryptjs from 'bcryptjs'
import { users } from './data'
import { useState } from 'react'

function App() {
  const [loggedUser, setLoggedUser] = useState(null)

  // * Hash a password string
  const hashPass = (pw) => {
    let salt = bcryptjs.genSaltSync(10)
    return bcryptjs.hashSync(pw, salt)
  }

  const handleLogIn = (e) => {
    e.preventDefault()
    // Hash the password
    const hashPw = hashPass(e.target.password.value)
    // "Store" in the database (add to users)
    console.log(hashPw)
    e.target.username.value = ''
    e.target.password.value = ''
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleLogIn}>
        <Row>
          <StyledLabel htmlFor="username">Username</StyledLabel>
          <input id="username" type="text" />
        </Row>
        <Row>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <input id="password" type="password" />
        </Row>
        <Row>
          <StyledButton variant="contained" type="submit">
            SIGN IN
          </StyledButton>
        </Row>
      </StyledForm>
    </StyledContainer>
  )
}

export default App

const StyledContainer = styled(Container)({
  margin: '1rem auto',
  textAlign: 'center',
  width: '80%',
})

const StyledForm = styled.form({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '.25rem',
})

const Row = styled.div({
  display: 'flex',
  columnGap: '1rem',
  flexDirection: 'row',
  margin: '.25rem 0',
})

const StyledLabel = styled.label({
  width: '100px',
})

const StyledButton = styled(Button)({
  height: '30px',
})
