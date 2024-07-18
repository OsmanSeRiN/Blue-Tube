
import { Provider } from 'react-redux';
import { store } from './Lib/Model/Redux/Store/Store';
import MainPage from './Lib/Pages/MainPage';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Color } from './Lib/Model/Content/Color';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Box bg={Color.bgColor} className='App-background'>
          <MainPage/>
        </Box>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
