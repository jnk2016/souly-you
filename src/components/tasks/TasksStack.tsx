import { createStackNavigator } from '@react-navigation/stack';
import Tasks from './Tasks';
import AddTask from './AddTask'

const Stack = createStackNavigator(); 
function TasksStack() {
  return (
      <Stack.Navigator initialRouteName={'Tasks'}>
      <Stack.Screen name='Add Task' component={AddTask} options={{headerShown: false}}/>
        <Stack.Screen name='Tasks' component={Tasks} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default TasksStack;