import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OperatorHome from '../Components/Home/OperatorHome';
import TaskManagement from '../Components/TaskManagements/TaskManagement';
import CleanerList from '../Components/CleanerList/CleanerList';
import CleanerDetails from '../Components/CleanerTask/CleanerDetails';
import ReportManagement from '../Components/ReportManagments/ReportManagement';

const Stack = createNativeStackNavigator();

export default function OperatorRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OperatorHome" component={OperatorHome}  />
            <Stack.Screen name="TaskManagement" component={TaskManagement} />
            <Stack.Screen name="CleanerList" component={CleanerList} />
            <Stack.Screen name="CleanerDetails" component={CleanerDetails} />
            <Stack.Screen name="ReportManagement" component={ReportManagement} />
        </Stack.Navigator>
    );
}
