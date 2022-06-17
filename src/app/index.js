import * as React from 'react';
import {Text} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from '../navigator';

import { persistor, store } from '../store';

const RNHighScores = () => {
  return (
    <Text>"NATIVE"</Text>
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <Router />
    //   </PersistGate>
    // </Provider>
  );
};

export default RNHighScores;
