import { createStackNavigator } from '@react-navigation/stack';
import PeriodActivity from './PeriodActivity'
import Period from './Period';
import AddSymptoms from './AddSymptoms';
import EditCycle from './EditCycle';

const Stack = createStackNavigator(); 
function EventsStack() {
  return (
      <Stack.Navigator initialRouteName={'Period'}>
        <Stack.Screen name='My Activity' component={PeriodActivity} options={{headerShown: false}}/>
        <Stack.Screen name='Edit Cycle' component={EditCycle} options={{headerShown: false}}/>
        <Stack.Screen name='Add Symptoms' component={AddSymptoms} options={{headerShown: false}}/>
        <Stack.Screen name='Period' component={Period} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default EventsStack;