import { createStackNavigator } from '@react-navigation/stack';
import Goals from './Goals';
import AddGoal from './AddGoal'

const Stack = createStackNavigator(); 
function GoalsStack() {
  return (
      <Stack.Navigator initialRouteName={'Goals'}>
      <Stack.Screen name='Add Goal' component={AddGoal} options={{headerShown: false}}/>
        <Stack.Screen name='Goals' component={Goals} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default GoalsStack;