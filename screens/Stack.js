import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { About } from './About';
import { Withdraw } from './Withdraw';
import { Loan } from './Loan';
import { Signup } from './Signup';
import { Signin } from './Signin';
import { Passwordreset } from './Passwordreset';
import { MyHome } from './Home';
import { Profile } from './Profile';
import { Paystack } from './Paystack';
const Stack = createNativeStackNavigator();

export function StackNavigation(){
    return (
        <Stack.Navigator initialRouteName='Sign up' screenOptions={{headerShown:false}}>
            <Stack.Screen name='About' component={About}/>
            <Stack.Screen name='Withdraw' component={Withdraw}/>
            <Stack.Screen name='Loan' component={Loan}/>
            <Stack.Screen name='Sign up' component={Signup}/>
            <Stack.Screen name='Sign in' component={Signin} options={{headerSHown:true}}/>
            <Stack.Screen name='Password reset' component={Passwordreset}/>
            <Stack.Screen name='My Home' component={MyHome}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Paystack' component={Paystack}/>
        </Stack.Navigator>
    )
}