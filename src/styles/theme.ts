// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
export const CustomTheme = extendTheme({
     colors: {
          primary: '#2C5EA8',
          on_primary: '#FFFF',
          primary_container: '#D0E3FF',
          on_primary_container: '#001A40',
          secondary: '#565E71',
          on_secondary: '#FFFF',
          primary_light: '#0B8BD3'
     },
     fonts:{
          body:`'Inter', sans-serif`
     }

    //  breakpoints: {
    //     sm: "320px",
    //     md: "768px",
    //     lg: "960px",
    //     xl: "1200px",
    //   },
})
