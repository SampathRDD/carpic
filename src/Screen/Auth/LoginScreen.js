import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  responsiveFontSize as RF,
  responsiveHeight as hp,
  responsiveWidth as wp,
} from 'react-native-responsive-dimensions';
import styles from '../Styles/Login';
import { images } from '../../constants/images';

import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../Components/Loader';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const passwordRef = useRef();
  const emailRef = useRef();

  const validateEmail = (email) => {
    const pattern = /^(?=.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^$/;
    return pattern.test(email);
  };

  const onSubmitEmail = () => {
    if (email.length > 0) {
      if (validateEmail(email)) {
        setErrorEmail('');
      } else {
        setErrorEmail('Invalid email');
      }
    } else {
      setErrorEmail('Email cannot be empty');
    }
  };

  const onSubmitPassword = () => {
    if (password.length > 0) {
      setErrorPassword('');
    } else {
      setErrorPassword('Password cannot be empty');
    }
  };

  const handleSubmitPress = () => {
    if (validateEmail(email) && password.length > 0) {
    setLoading(true);

    fetch('https://carspotter-dhanushka.onrender.com/login', {
      method: 'POST',
      headers: {
        //Header Defination
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
      .then((data) => {
        //Hide Loader
        setLoading(false);
        console.log(data);
        // If server response message same as Data Matched
        if (data.status === 'success') {
          AsyncStorage.setItem('user_id', data.data.email);
          console.log(data.data.email);
          Alert.alert ('Login Successfull');
          navigation.replace('AppNavigation');
        } else {
          setErrortext(data.msg);
          Alert.alert ('Login Failed', data.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
        Alert.alert('Login Failed', error);
      });
    } else {
      onSubmitEmail();
      onSubmitPassword();
    }
  };

  return (
    <ScrollView horizontal={false}>
      <Loader loading={loading} />
      <View style={styles.loginContainer}>
      <Text style={styles.loginText}>CarPic Login</Text>
          <Image source={images.Logo} style={styles.logo} />
        <View style={styles.LgView}>
          <Text style={styles.titleText}>
            Please enter user name and password
          </Text>
          <Text style={styles.titleText}>
            sent you via email
          </Text>
        </View>
        <View>
        <View style={styles.input} >
            <TextInput
              ref={emailRef}
              value={email}
              style={styles.inputbox}
              placeholder="User Name"
              placeholderTextColor="#888"
              autoCorrect={false}
              autoCompleteType="off"
              autoCapitalize="none"
              returnKeyType="next"
              onChangeText={value => {
                setErrorEmail('');
                setEmail(value);
              }}
              onEndEditing={() => {
                onSubmitEmail(email);
                passwordRef.current.focus();
              }}
              onSubmitEditing={() => {}}
              onBlur={() => {
                onSubmitEmail(email);
              }}
            />
            </View>
          <View style={{alignItems: 'flex-start', marginLeft: wp(13)}}>
            <Text style={{fontSize: RF(1.3), color: 'red'}}>
              {errorEmail.length > 0 ? errorEmail : ''}
            </Text>
          </View>
          <View style={styles.input}>
            <TextInput
              value={password}
              style={styles.inputbox}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={true}
              keyboardType="default"
              returnKeyType="done"
              onChangeText={value => {
                setErrorPassword('');
                setPassword(value);
              }}
              onEndEditing={() => {
                onSubmitPassword(password);
              }}
              onBlur={() => {
                onSubmitPassword(password);
              }}
              ref={passwordRef}
            />
            <Image source={images.EyeC} style={styles.eye} />
            </View>
          <View style={{alignItems: 'flex-start', marginLeft: wp(13)}}>
            <Text style={{fontSize: RF(1.3), color: 'red'}}>
              {errorPassword.length > 0 ? errorPassword : ''}
            </Text>
          </View>
          <TouchableOpacity style={styles.logBtn} onPress={handleSubmitPress} >
              <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(2),
              justifyContent: 'center',
            }}>
            <Text style={styles.acountTxt}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("RegisterScreen")}>
              <Text style={styles.signupTxt}>  Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;