import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { App } from './App';
import { ChakraProvider, Grid } from '@chakra-ui/react';
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <ChakraProvider>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Grid
        minH='100vh'
        minW='100vw'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        bg='purple.300'
      >
        <App />
      </Grid>
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
