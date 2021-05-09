import { createStackNavigator } from '@react-navigation/stack';
import RecordMood from './RecordMood';
import MoodActivity from './MoodActivity'
import Mood from './Mood';

const Stack = createStackNavigator(); 
function EventsStack() {
  return (
      <Stack.Navigator initialRouteName={'Mood'}>
      <Stack.Screen name='My Activity' component={MoodActivity} options={{headerShown: false}}/>
      <Stack.Screen name='Record Mood' component={RecordMood} options={{headerShown: false}}/>
        <Stack.Screen name='Mood' component={Mood} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default EventsStack;