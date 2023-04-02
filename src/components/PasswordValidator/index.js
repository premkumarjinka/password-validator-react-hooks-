// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  Container,
  Heading,
  Para,
  Input,
  ParaTwo,
} from './styledComponents'

const PasswordValidator = () => {
  const [input, setInput] = useState('')

  const onInputChange = event => {
    setInput(event.target.value)
  }

  const a =
    input.length >= 8 ? null : 'Your password must be at least 8 characters'

  return (
    <MainContainer>
      <Container>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" onChange={onInputChange} value={input} />
        <ParaTwo>{a}</ParaTwo>
      </Container>
    </MainContainer>
  )
}
export default PasswordValidator
