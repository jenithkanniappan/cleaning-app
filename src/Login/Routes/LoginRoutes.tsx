import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Cleaner/Components/Home/Home'
import Task from '../../Cleaner/Components/Task/Task';
import Login from '../Components/Login'
import { RootStackParamList } from '../../Cleaner/Routes/CleanerRoutes';

const LoginRoutes=()=>{
          const Stack = createNativeStackNavigator<RootStackParamList>();
    
    return(
         <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
}
export default LoginRoutes