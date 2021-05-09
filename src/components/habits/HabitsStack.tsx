import { createStackNavigator } from '@react-navigation/stack';
import Habits from './Habits';
import AddHabit from './AddHabit';
import HabitsActivity from './HabitsActivity'
import Habit from './Habit';

const Stack = createStackNavigator(); 
function EventsStack() {
  return (
      <Stack.Navigator initialRouteName={'Habits'}>
      <Stack.Screen name='Habit' component={Habit} options={{headerShown: false}}/>
      <Stack.Screen name='My Activity' component={HabitsActivity} options={{headerShown: false}}/>
      <Stack.Screen name='Add Habit' component={AddHabit} options={{headerShown: false}}/>
        <Stack.Screen name='Habits' component={Habits} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default EventsStack;