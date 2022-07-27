import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './pages/Home'
import { CustomTheme } from './styles/theme'




function App() {
     return (
          <ChakraProvider theme={CustomTheme}>
               <Home/>
          </ChakraProvider>
     )
}

export default App
