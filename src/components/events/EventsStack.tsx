import { createStackNavigator } from '@react-navigation/stack';
import Events from './Events';
import AddEvents from './AddEvent'

const Stack = createStackNavigator(); 
function EventsStack() {
  return (
      <Stack.Navigator initialRouteName={'Events'}>
      <Stack.Screen name='Add Event' component={AddEvents} options={{headerShown: false}}/>
        <Stack.Screen name='Events' component={Events} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default EventsStack;