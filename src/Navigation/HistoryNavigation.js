import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HistoryScreen from '../Screen/TabScreens/HistoryScreen';

const Stack = createNativeStackNavigator();

const HistoryNavigation = ({ navigation, route }) => {
  return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HistoryScreen">
            <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        </Stack.Navigator>
  );
};

export default HistoryNavigation;