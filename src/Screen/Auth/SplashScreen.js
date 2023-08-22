import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { images } from '../../constants/images';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'AppNavigation'
        ),
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={images.Logo}
        style={{width: '50%', resizeMode: 'contain'}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});