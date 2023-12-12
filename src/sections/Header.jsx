import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Link as ChakraLink, MenuItem } from '@chakra-ui/react'
// import './App.css'
import { Link as ReactRouterLink } from 'react-router-dom'

function NavigationItem({ name, url, setCurrentForm, isDisabled }) {
  return (
    <Tab
      as="a" textAlign='center'
      fontSize='3xl' textStyle='secondary'  backgroundColor='#0A0A0A'
      color='white' isDisabled={isDisabled}
    >
      <ChakraLink as={ReactRouterLink} to={url} width='100%' _hover={{ textDecoration: "none", color: '#494949' }}>
        {name}
      </ChakraLink>
    </Tab>
  )
}

export default function Header() {
  return (
    <Flex w='100%' color='teal' display='flex' justifyContent='center'>
      <Tabs variant='soft-rounded' colorScheme='green' isFitted>
        <TabList>
          <NavigationItem name='Home' url='/' isDisabled={false} />
          <NavigationItem name='Test' url='/test' isDisabled={false} />
          <NavigationItem name='Tracks' url='/tracks' isDisabled={false} />
          <NavigationItem name='Artists' url='/artists' isDisabled={false} />
        </TabList>
        {/* <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels> */}
      </Tabs>
    </Flex>
  )
}
