
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home/Home'
import Task from '../Components/Task/Task';
import React, { useState,useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthContext/AuthContext'
import Training from '../Components/Training/Training';

export type RootStackParamList = {
  Home: undefined ;
  Login: undefined;
  Task: undefined;
  Training: undefined
  navigate: undefined;
};

 const CleanerRoutes=()=> {
  const Auth=useContext(AuthContext)
  
      const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Training" component={Training}      options={{ headerShown: false }}/>

      </Stack.Navigator>
    );
  }

  export default CleanerRoutes