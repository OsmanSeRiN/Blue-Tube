import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Lib/Model/Redux/Store/Store';
import MainPage from './Lib/Pages/MainPage';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <MainPage/>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
