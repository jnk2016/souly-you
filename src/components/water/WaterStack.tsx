import { createStackNavigator } from '@react-navigation/stack';
import RecordWater from './RecordWater';
import WaterActivity from './WaterActivity'
import Water from './Water';

const Stack = createStackNavigator(); 
function EventsStack() {
  return (
      <Stack.Navigator initialRouteName={'Water'}>
      <Stack.Screen name='My Activity' component={WaterActivity} options={{headerShown: false}}/>
      <Stack.Screen name='Record Water' component={RecordWater} options={{headerShown: false}}/>
        <Stack.Screen name='Water' component={Water} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default EventsStack;