/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  LogBox,
} from 'react-native';
import { NativeBaseProvider } from 'native-base'
import NavContainer from './src/navigation/NavContainer';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <View style={styles.container}>
          <StatusBar
            barStyle={'default'}
          />
          <NavContainer />
        </View>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

