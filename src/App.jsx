import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import NotesApp from './notes-app/NotesApp';

function App() {
  return (
    <>
      <ChakraProvider>
        <NotesApp />
      </ChakraProvider>
    </>
  );
}

export default App;
