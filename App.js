import { StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation } from './Navigation/BottomNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  SplashScreen.hide();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <BottomNavigation/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({}) 