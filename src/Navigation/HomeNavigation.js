import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screen/TabScreens/HomeScreen';
import MapScreen from '../Screen/Map/MapScreen';

const Stack = createNativeStackNavigator();

const HomeNavigation = ({ navigation, route }) => {
  return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="mapScreen" component={MapScreen} />
        </Stack.Navigator>
  );
};

export default HomeNavigation;