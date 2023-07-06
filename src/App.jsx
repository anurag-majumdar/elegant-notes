import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import NotesHome from './notes-home/NotesHome'

function App() {
  return (
    <>
      <ChakraProvider>
        <NotesHome />
      </ChakraProvider>
    </>
  )
}

export default App
