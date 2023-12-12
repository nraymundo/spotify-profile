import { Text, Flex } from "@chakra-ui/react"

export default function Test() {
  return (
    <Flex w='95%' h='100%' direction='row' justify='space-between' align='center' pl={50} backgroundColor='yellow'>
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
    </Flex>
  )
}