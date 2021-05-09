import { createStackNavigator } from '@react-navigation/stack';
import MealsActivity from './BudgetActivity'
import Budget from './Budget';
import SavingsGoal from './SavingsGoal';
import Payments from './Payments';
import Income from './Income';
import Expenses from './Expenses';
import AddSavingsGoal from './AddSavingsGoal';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';

const Stack = createStackNavigator(); 
function EventsStack() {
  return (
      <Stack.Navigator initialRouteName={'Budget'}>
        <Stack.Screen name='Add Savings Goal' component={AddSavingsGoal} options={{headerShown: false}}/>
        <Stack.Screen name='Add Expense' component={AddExpense} options={{headerShown: false}}/>
        <Stack.Screen name='Add Income' component={AddIncome} options={{headerShown: false}}/>
        <Stack.Screen name='My Expenses' component={Expenses} options={{headerShown: false}}/>
        <Stack.Screen name='My Income' component={Income} options={{headerShown: false}}/>
        <Stack.Screen name='My Activity' component={MealsActivity} options={{headerShown: false}}/>
        <Stack.Screen name='Payments' component={Payments} options={{headerShown: false}}/>
        <Stack.Screen name='My Savings Goals' component={SavingsGoal} options={{headerShown: false}}/>
        <Stack.Screen name='Budget' component={Budget} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default EventsStack;