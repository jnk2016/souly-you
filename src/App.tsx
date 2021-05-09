import React from 'react';
import './App.css';
import { View, Text, Image } from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { budgetstack, dashboard,eventsstack,goalsstack, habitsstack, mealsstack, moodstack, periodstack, tasksstack, waterstack } from './components/index';
import globalstyles from './assets/globalstyles'

function App() {
  const Stack = createStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background:'white',
    },
    
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Dashboard'}>
        <Stack.Screen name='My Budget' component={budgetstack} options={{headerShown: false}}/>
        <Stack.Screen name='My Moods' component={moodstack} options={{headerShown: false}}/>
        <Stack.Screen name='My Meals' component={mealsstack} options={{headerShown: false}}/>
        <Stack.Screen name='My Water' component={waterstack} options={{headerShown: false}}/>
        <Stack.Screen name='My Period' component={periodstack} options={{headerShown: false}}/>
        <Stack.Screen name='My Habits' component={habitsstack} options={{headerShown: false}}/>
        <Stack.Screen name='My Tasks' component={tasksstack} options={{headerShown: false}}/>
        <Stack.Screen name='My Events' component={eventsstack} options={{headerShown: false}}/>
        <Stack.Screen name='My Goals' component={goalsstack} options={{headerShown: false}}/>
        <Stack.Screen name='Dashboard' component={dashboard} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
