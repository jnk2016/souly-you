import React from 'react';
import './App.css';
import { View, Text, Image } from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { dashboard } from './components/index'

function App() {
  const Stack = createStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background:'white',
    }
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'dashboard'}>
        <Stack.Screen name='dashboard' component={dashboard} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
