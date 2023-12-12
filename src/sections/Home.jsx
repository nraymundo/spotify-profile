import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'

export default function Home() {
  return (
    <Flex w='95%' minHeight='100vh' direction='row' justify='space-between' align='center' pl={50}>
      <Flex direction='column' w='40%' h='30%' justify='flex-end'>
        <Text
          fontSize={25}
          fontFamily={`'Montserrat Variable', sans-serif`}
          lineHeight={1.1}
          fontWeight={500}
        >
          SPOTIFY PROFILE
        </Text>
        <Text
          fontSize={20}
          fontFamily={`'Montserrat Variable', sans-serif`}
          lineHeight={1.1}
          color='#1DB954'
          fontWeight={500}
        >
          LOGIN HERE
        </Text>
      </Flex>
      <Flex direction='column' w='60%' justify='center' align='center'>
        <Text
          fontSize={120}
          fontFamily={`'Bodoni Moda Variable', sans-serif`}
          lineHeight={1.1}
          textAlign='center'
          color='black'
        >
          <ChakraLink as={ReactRouterLink} to='/tracks' _hover={{ textDecoration: "none", color: 'black', fontStyle: 'italic' }}>
            TRACKS
          </ChakraLink>
        </Text>
        <Text
          fontSize={120}
          fontFamily={`'Bodoni Moda Variable', sans-serif`}
          lineHeight={1.1}
          textAlign='center'
          color='black'
        >
          <ChakraLink as={ReactRouterLink} to='/artists' _hover={{ textDecoration: "none", color: 'black', fontStyle: 'italic' }}>
            ARTISTS
          </ChakraLink>
        </Text>
        <Text
          fontSize={120}
          fontFamily={`'Bodoni Moda Variable', sans-serif`}
          lineHeight={1.1}
          textAlign='center'
          color='black'
        >
          <ChakraLink as={ReactRouterLink} to='/recent' _hover={{ textDecoration: "none", color: 'black', fontStyle: 'italic' }}>
            RECENT
          </ChakraLink>
        </Text>
      </Flex>
    </Flex>
  )
}