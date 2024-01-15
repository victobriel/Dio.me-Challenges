import { Box, Container, Image, Link } from '@chakra-ui/react'
import logo from '../logo.png'

export const Header = () => {
  return (
    <Container
      display='flex'
      m={0}
      p={'15px 50px'}
      minWidth='100vw'
      justifyContent='space-between'
      backgroundColor='#151515'
      fontFamily='Open Sans'>
      <Image
        h='38px'
        w='90px'
        src={logo}
        alt="logo"
      />
      <Box display='flex' gap={5} justifyContent='right' alignItems={'center'} color='white' fontSize={16}>
        <Link
          _hover={{color: '#932ed1'}}
          href='#'>Home</Link>
        <Link
          _hover={{color: '#932ed1'}}
          href='#'>About Us</Link>
        <Link
          _hover={{backgroundColor: '#7213ad', color: '#fff'}}
          href='#' p='8px 15px' borderRadius='10' fontWeight='700' backgroundColor='#932ed1'>Create account</Link>
      </Box>
    </Container>
  );
}
