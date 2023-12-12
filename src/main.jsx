import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import Home from './sections/Home.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TopTracks from './sections/TopTracks.jsx'
import TopArtists from './sections/TopArtists.jsx'
import theme from './theme.js'
import '@fontsource-variable/texturina';
import '@fontsource-variable/bodoni-moda';
import '@fontsource-variable/bodoni-moda/opsz-italic.css';
import '@fontsource-variable/montserrat';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tracks",
        element: <TopTracks />,
      },
      {
        path: "/artists",
        element: <TopArtists />,
      },
      {
        path: "/recent",
        element: <TopArtists />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)