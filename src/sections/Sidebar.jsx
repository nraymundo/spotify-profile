import { Flex, Text, Box, Link as ChakraLink } from "@chakra-ui/react"
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation();
  const currentForm = location.pathname.split('/')[1];

  return (
    <Flex w='5%' direction='column' justify='center' align='center'>
      {currentForm && (
        <>
          <Box w='1%' h='4%' backgroundColor='black' mb={5}/>
          <Text
            fontSize={15}
            fontFamily={`'Montserrat Variable', sans-serif`}
            lineHeight={1.1}
            fontWeight={500}
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(-180deg)',
            }}
          >
            <ChakraLink as={ReactRouterLink} to='/' _hover={{ textDecoration: 'line-through', color: 'black' }}>
              HOME
            </ChakraLink>
          </Text>
          <Box w='1%' h='2%' backgroundColor='black' mb={5} mt={5}/>
          <Text
            fontSize={15}
            fontFamily={`'Montserrat Variable', sans-serif`}
            lineHeight={1.1}
            fontWeight={500}
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(-180deg)',
            }}
          >
            <ChakraLink as={ReactRouterLink} to='/tracks' _hover={{ textDecoration: 'line-through', color: 'black' }}>
              TRACKS
            </ChakraLink>
          </Text>
          <Box w='1%' h='2%' backgroundColor='black' mb={5} mt={5}/>
          <Text
            fontSize={15}
            fontFamily={`'Montserrat Variable', sans-serif`}
            lineHeight={1.1}
            fontWeight={500}
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(-180deg)',
            }}
          >
            <ChakraLink as={ReactRouterLink} to='/artists' _hover={{ textDecoration: 'line-through', color: 'black' }}>
              ARTISTS
            </ChakraLink>
          </Text>
          <Box w='1%' h='2%' backgroundColor='black' mb={5} mt={5}/>
          <Text
            fontSize={15}
            fontFamily={`'Montserrat Variable', sans-serif`}
            lineHeight={1.1}
            fontWeight={500}
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(-180deg)',
            }}
          >
            <ChakraLink as={ReactRouterLink} to='/artists' _hover={{ textDecoration: 'line-through', color: 'black' }}>
              RECENT
            </ChakraLink>
          </Text>
        </>
      )}
      <Box w='1%' h='100%' backgroundColor='black' mt={currentForm ? 5 : 0}/>
    </Flex>
  )
}