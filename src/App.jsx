import './App.css'
import { Flex } from "@chakra-ui/react"
import Sidebar from './sections/Sidebar'
import { Outlet } from "react-router-dom"

function App() {
  return (
    <Flex bg='#edede9' width='100%' direction='row'>
      <Sidebar />
      <Outlet />
    </Flex>
  )
}

export default App
