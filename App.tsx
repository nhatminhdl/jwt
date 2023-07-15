/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {registerRootComponent}  from 'expo';
import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Router from './src/navigations/Router';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { getUserData } from './src/utils/untils';
import { saveUserData } from './src/redux/actions/auth';


function App(): JSX.Element {
  
  useEffect(() => {
    (async () => {
      const userData = await getUserData();
      console.log('====================================');
      console.log('user App', userData);
      console.log('====================================');
      if(!!userData){
        saveUserData(userData)
      }
    } )();
  },[])

  return (
    <Provider store={store}>
      <Router/>
      <FlashMessage
        position={'top'}
      />

    </Provider>
  );
}


export default registerRootComponent(App);
