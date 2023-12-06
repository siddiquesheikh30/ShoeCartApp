/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import NavContainer from './src/navigation/NavContainer';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
// const screenDefaultOption = { headerShown: false };

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          barStyle={'default'}
        />
        <NavContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

