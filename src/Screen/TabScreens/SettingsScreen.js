
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SettingsScreen = (props) => {
  return(
    <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.text}> Setting </Text>
        <TouchableOpacity onPress={ () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  }}>
          <Text style={styles.text}>Log out</Text>

        </TouchableOpacity>
    </View>
)

};

export default SettingsScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },


});