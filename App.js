/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Login from './containers/Login/LoginContainer.js';
// import VideosScreen from './containers/Videos/VideosContainer.js';



const Stack = createNativeStackNavigator();

const screenAnimationConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        transitionSpec: {
          open: screenAnimationConfig,
          close: screenAnimationConfig,
        },
      }}
      initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Login} />
        {/* <Stack.Screen name="Details" component={VideosScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
