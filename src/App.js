
import { Provider } from 'react-redux';
import { store } from './Lib/Model/Redux/Store/Store';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Color } from './Lib/Model/Content/Color';
import NavigationsPage from './Lib/Pages/NavigationsPage';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Box bg={Color.bgColor}>
          <NavigationsPage/>
        </Box>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
