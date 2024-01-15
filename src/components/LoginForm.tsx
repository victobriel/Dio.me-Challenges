import { Box, Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { login } from '../services/Login'

export const LoginForm = () => {
  return (
    <Box
      minHeight='calc(100vh - 138px)' display='flex' flexDirection='column' backgroundColor='transparent'>
      <FormControl
        backgroundColor='white'
        p={5}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        maxWidth='500px'
        borderRadius='20px'
        margin='auto'
        padding='25px 40px 25px'
        border='1px solid #ccc'
        boxShadow='md'
      >
        <Text
          className='login-form__title'
          fontSize='26px'
          color='#932ed1'
          as='b'
          >Log in to your account
        </Text>
        <FormLabel mt={5} htmlFor='emailInput'>Email Address:</FormLabel>
        <Input
          _focus={{borderColor: '#932ed1'}}
          type='email' id='emailInput' />
        <FormLabel mt={5} htmlFor='passwordInput'>Password:</FormLabel>
        <Input
          _focus={{borderColor: '#932ed1'}}
          type='password' id='passwordInput' />
        <Button
          _hover={{backgroundColor: '#932ed1', color: '#fff', border: '1px solid #932ed1'}}
          onClick={login}
          backgroundColor='#fff'
          type='submit'
          mt={7}
          mb={1}
          p='10px 20px'
          border='1px solid #333'
        >Sign-in</Button>
        <Box textAlign='right'>
          <Button w='fit-content' variant='link' fontSize={14} p={1} color='#ccc'>Problems with login?</Button>
        </Box>
      </FormControl>
    </Box>
  )
}
