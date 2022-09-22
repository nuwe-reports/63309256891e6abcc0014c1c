import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
      customGreen: {
        50: "#c1e26a",
        100:"#0b2005",
        200: "#020701"
      },
      customBlue:{
        50:"#00b5cc"
      }

    },
  })


  export default theme