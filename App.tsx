import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import './global.css';
import { ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home from './src/Cleaner/Components/Home/Home';
import Task from './src/Cleaner/Components/Task/Task';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, HeaderTitle } from '@react-navigation/elements';
import Login from './src/Login/Components/Login';
import { AuthProvider } from './src/Authentication/AuthContext/AuthContext';
import { useContext } from 'react';
import { AuthContext } from './src/Authentication/AuthContext/AuthContext';
import CleanerRoutes from './src/Cleaner/Routes/CleanerRoutes';
import LoginRoutes from './src/Login/Routes/LoginRoutes';
import OperatorRoutes from './src/OperationLead/Routes/OperatorRoutes';
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Task: undefined;
  navigate: Function;
  Training: undefined;
};

function Main() {
  const Auth = useContext(AuthContext);
  console.log(Auth, 'asdfasdfdfasdfasdfasdfasdfad');
  if (Auth?.isloding) {
    return (
      <View className="flex-1 justify-center item-center">
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  console.log(Auth?.Token && Auth.Role !==null)
  if (Auth?.Token == null ) {
    return (
      <NavigationContainer>
        <LoginRoutes />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      {Auth?.Role !== 'ADMIN' ? (
        Auth?.Role === 'CLEANER' ? (
          <CleanerRoutes />
        ) : (
          <OperatorRoutes />
        )
      ) : (
        
        <LoginRoutes />
      )}
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
