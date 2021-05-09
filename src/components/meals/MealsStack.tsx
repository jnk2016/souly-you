import { createStackNavigator } from '@react-navigation/stack';
import MealsActivity from './MealsActivity'
import Meals from './Meals';
import Groceries from './Groceries';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import EditGroceries from './EditGroceries';

const Stack = createStackNavigator(); 
function EventsStack() {
  return (
      <Stack.Navigator initialRouteName={'Meals'}>
        <Stack.Screen name='Edit Groceries' component={EditGroceries} options={{headerShown: false}}/>
        <Stack.Screen name='Add Recipe' component={AddRecipe} options={{headerShown: false}}/>
        <Stack.Screen name='My Activity' component={MealsActivity} options={{headerShown: false}}/>
        <Stack.Screen name='Recipes' component={Recipes} options={{headerShown: false}}/>
        <Stack.Screen name='Groceries' component={Groceries} options={{headerShown: false}}/>
        <Stack.Screen name='Meals' component={Meals} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default EventsStack;