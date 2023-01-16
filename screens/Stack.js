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
import { History } from './History';
import { Intro } from './Intro';

const Stack = createNativeStackNavigator();

export function StackNavigation(){
    return (
        <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:false}}>
            <Stack.Screen name='About' component={About}/>
            <Stack.Screen name='Withdraw' component={Withdraw}options={{headerShown:true}}/>
            <Stack.Screen name='Loan' component={Loan}/>
            <Stack.Screen name='Sign up' component={Signup}/>
            <Stack.Screen name='Sign in' component={Signin} options={{headerSHown:true}}/>
            <Stack.Screen name='Password reset' component={Passwordreset} options={{headerShown:true}}/>
            <Stack.Screen name='My Home' component={MyHome}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Paystack' component={Paystack}/>
            <Stack.Screen name='History' component={History}/>
            <Stack.Screen name='Intro' component={Intro}/>
        </Stack.Navigator>
    )
}