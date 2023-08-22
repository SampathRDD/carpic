import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import {View, Image, Text, StyleSheet} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as RF,
                      } from 'react-native-responsive-dimensions';
import {images} from '../constants/images';
import colors from '../constants/colors';

//page import
import HomeNavigation from './HomeNavigation';
import HistoryNavigation from './HistoryNavigation';
import SettingsNavigation from './SettingsNavigation';

const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {backgroundColor: colors.WHITE_COLOR,},
      tabBarInactiveTintColor: colors.BLACK_COLOR,
      tabBarActiveTintColor: colors.BLACK_COLOR,
    }}>
      <Tab.Screen 
      name="HomeNavigation" 
      component={HomeNavigation} 
      options={{
        tabBarIcon: ({focused}) => (
          <View style={[{alignItems: 'center'}]}>
            <Image
              source={focused ? images.NewActive : images.New}
              style={styles.bottomTabIcons}
            />
            {focused ? (
              <View
                style={[
                  {
                    borderWidth: 1.2,
                    borderColor: colors.WHITE_COLOR,
                    backgroundColor: colors.MAIN_THEME,
                    marginTop: hp(1),
                    width: wp(28),
                    height: hp(1),
                  },
                ]}
              />
            ) : (
              <View
                style={[
                  {
                    borderWidth: 1.2,
                    borderColor: colors.WHITE_COLOR,
                    marginTop: hp(1),
                    width: wp(28),
                    height: hp(1),
                  },
                ]}
              />
            )}
          </View>
        ),
      }}
      />
      <Tab.Screen name="HistoryNavigation" component={HistoryNavigation} 
      options={{
        tabBarIcon: ({focused}) => (
          <View style={[{alignItems: 'center'}]}>
            <Image
              source={focused ? images.LibraryActive : images.Library}
              style={styles.bottomTabIcons}
            />
            {focused ? (
              <View
                style={[
                  {
                    borderWidth: 1.2,
                    borderColor: colors.WHITE_COLOR,
                    backgroundColor: colors.MAIN_THEME,
                    marginTop: hp(1),
                    width: wp(28),
                    height: hp(1),
                  },
                ]}
              />
            ) : (
              <View
                style={[
                  {
                    borderWidth: 1.2,
                    borderColor: colors.WHITE_COLOR,
                    marginTop: hp(1),
                    width: wp(28),
                    height: hp(1),
                  },
                ]}
              />
            )}
          </View>
        ),
      }}/>
      <Tab.Screen name="SettingsNavigationn" component={SettingsNavigation} 
      options={{
        tabBarIcon: ({focused}) => (
          <View style={[{alignItems: 'center'}]}>
            <Image
              source={focused ? images.SettingActive : images.Setting}
              style={styles.bottomTabIcons}
            />
            {focused ? (
              <View
                style={[
                  {
                    borderWidth: 1.2,
                    borderColor: colors.WHITE_COLOR,
                    backgroundColor: colors.MAIN_THEME,
                    marginTop: hp(1),
                    width: wp(28),
                    height: hp(1),
                  },
                ]}
              />
            ) : (
              <View
                style={[
                  {
                    borderWidth: 1.2,
                    borderColor: colors.WHITE_COLOR,
                    marginTop: hp(1),
                    width: wp(28),
                    height: hp(1),
                  },
                ]}
              />
            )}
          </View>
        ),
      }}/>
    </Tab.Navigator>
  );
}
export default AppNavigation;
 
const styles = StyleSheet.create({
  bottomTabIcons: {
    height: wp(5),
    width: wp(5),
    marginTop: hp(1),
  },
  labelStyle:{
    fontSize: RF(1),
     color: colors.BLACK_COLOR,
    }
});