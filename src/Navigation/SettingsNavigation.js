import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../Screen/TabScreens/SettingsScreen';

const Stack = createNativeStackNavigator();

const SettingsNavigation = ({ navigation, route }) => {
  return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HistoryScreen">
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
  );
};

export default SettingsNavigation;