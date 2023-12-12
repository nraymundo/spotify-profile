import { useEffect, useState } from "react";
import { Spinner, Text, Image, Grid, GridItem, Flex } from "@chakra-ui/react"
import { getTopTracks } from "../SpotifyApi";

export default function TopTracks() {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getTopTracks(),
    ]).then((results) => {
      setTracks(results[0]);
      setIsLoading(false);
    });
  }, []);

  return (
    <Flex w='95%' h='100%' minHeight='100vh' direction='column' pt={10} pl={100} align='flex-start'>
      <Text
        fontSize={40}
        fontFamily={`'Montserrat Variable', sans-serif`}
        lineHeight={1.1}
        fontWeight={700}
      >
        Top Tracks
      </Text>
      {isLoading && (
        <Flex w='100%' h='100%' minHeight='80vh' justify='center' align='center' pr={100}>
          <Spinner
            thickness='5px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#1DB954'
            size='120px'
            boxSize={20}
          />
        </Flex>
      )}
      {!isLoading && (
        <Grid templateColumns='repeat(10, 1fr)' gap={6} pt={10} pr={100} width='100%'>
          {tracks && tracks.map(track => (
            <GridItem key={track.name} colSpan={10}>
              <Flex direction='row' align='center' justify='flex-start' width='100%'>
                <Image
                  boxSize={50}
                  objectFit='cover'
                  src={track.image}
                  alt={track.name}
                />
                <Flex direction='row' justify='space-between' width='100%' pl={1}>
                  <Flex direction='column' align='flex-start'>
                    <Text
                      fontWeight={700}
                      color='black'
                      fontSize={15}
                      ml={2}
                    >
                      {track.name}
                    </Text>
                    <Text
                      fontWeight={500}
                      color='#797D81'
                      fontSize={13}
                      ml={2}
                    >
                      {track.artists.join(', ')}
                    </Text>
                  </Flex>
                  <Text
                    fontWeight={700}
                    color='black'
                    fontSize={14}
                    ml={2}
                  >
                    {track.length}
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      )}
    </Flex>
  )
}