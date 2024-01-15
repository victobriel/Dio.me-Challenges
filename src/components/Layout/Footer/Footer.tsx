import { Container, Image, Text } from "@chakra-ui/react"
import logo from '../logo.png'

export const Footer = () => {
    return (
      <Container
        display='flex'
        m={0} p={'15px 50px'}
        minWidth='100vw'
        backgroundColor='#151515'
        flexDirection='row-reverse'
        justifyContent='space-between'
        alignItems='center'
      >
        <Image
          h='38px'
          w='90px'
          src={logo}
          alt="logo"
        />
        <Text color='white' fontSize={13}>This page was created for learning purposes only</Text>
      </Container>
    )
}
