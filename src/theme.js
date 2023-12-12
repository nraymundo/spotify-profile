// importing the required chakra libraries
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  // Whatever you pass here will be ADDED to the theme.
  textStyles: { 
    primary: {
      fontFamily: `'Bodoni Moda Variable', sans-serif`,
    },
  },
});

// export our theme
export default theme