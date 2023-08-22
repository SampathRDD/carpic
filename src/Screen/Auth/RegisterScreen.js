import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {
  responsiveFontSize as RF,
  responsiveHeight as hp,
  responsiveWidth as wp,
} from 'react-native-responsive-dimensions';
import {images} from '../../constants/images';
import Loader from '../Components/Loader';
import styles from '../Styles/Register';

const RegisterScreen = (props) => {
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorFirst, setErrorFirst] = useState('');
  const [errorLast, setErrorLast] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const onSubmitEmail = () => {
    function validateEmail(email) {
      var pattern =
        /^(?=.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^$/;

      console.log(pattern.test(email));
      return pattern.test(email);
    }

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
  const onSubmitfirstName = () => {
    if (firstName.length > 0) {
    } else {
      setErrorFirst('First Name cannot be empty');
    }
  };
  const onSubmitlastName = () => {
    if (lastName.length > 0) {
    } else {
      setErrorLast('Last Name cannot be empty');
    }
  };

  const onSubmitPassword = () => {
    if (password.length > 0) {
      setErrorPassword('');
    } else {
      setErrorPassword('Password cannot be empty');
    }
  };
  const handleSubmitButton = () => {
    setLoading(true);
    fetch('https://carspotter-dhanushka.onrender.com/register', {
      method: 'POST',
      headers: {
        //Header Defination
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //Hide Loader
        setLoading(false);
        console.log(data);
        // If server response message same as Data Matched
        if (data.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
          Alert.alert ('Registration Successful. Please Login to proceed');
          props.navigation.navigate('LoginScreen');
        } else {
          setErrortext(data.msg);
          console.log(data.msg);
          Alert.alert ('Registration Unsuccessful.', data.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
        Alert.alert ('Registration Unsuccessful.', error);
      });
  };
  return (
    <ScrollView horizontal={false}>
      <Loader loading={loading} />
      <View style={styles.loginContainer}>
      <Text style={styles.loginText}>CarPic Register</Text>
          <Image source={images.Logo} style={styles.logo} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: hp(4),
            }}>
            <Text style={styles.acountTxt}>You AllReady have an account?</Text>
            <TouchableOpacity onPress={()=> props.navigation.navigate('LoginScreen')}>
              <Text style={styles.signupTxt}>  Sign in</Text>
            </TouchableOpacity>
          </View>
        <View>
        <View style={styles.input} >
            <TextInput
              ref={firstNameRef}
              value={firstName}
              style={styles.inputbox}
              placeholder="First Name"
              placeholderTextColor="#888"
              autoCorrect={false}
              autoCompleteType="off"
              autoCapitalize="none"
              returnKeyType="next"
              onChangeText={value => {
                setErrorFirst('');
                setFirstName(value);
              }}
              onEndEditing={() => {
                onSubmitfirstName(firstName);
                lastNameRef.current.focus();
              }}
              onSubmitEditing={() => {}}
              onBlur={() => {
                onSubmitfirstName(firstName);
              }}
            />
            </View>
          <View style={{alignItems: 'flex-start', marginLeft: wp(13)}}>
            <Text style={{fontSize: RF(1.3), color: 'red'}}>
              {errorFirst.length > 0 ? errorFirst : ''}
            </Text>
          </View>
          <View style={styles.input} >
            <TextInput
              ref={lastNameRef}
              value={lastName}
              style={styles.inputbox}
              placeholder="Last Name"
              placeholderTextColor="#888"
              autoCorrect={false}
              autoCompleteType="off"
              autoCapitalize="none"
              returnKeyType="next"
              onChangeText={value => {
                setErrorLast('');
                setLastName(value);
              }}
              onEndEditing={() => {
                onSubmitlastName(lastName);
                emailRef.current.focus();
              }}
              onSubmitEditing={() => {}}
              onBlur={() => {
                onSubmitEmail(lastName);
              }}
            />
            </View>
          <View style={{alignItems: 'flex-start', marginLeft: wp(13)}}>
            <Text style={{fontSize: RF(1.3), color: 'red'}}>
              {errorLast.length > 0 ? errorLast : ''}
            </Text>
          </View>
          <View style={styles.input} >
            <TextInput
              ref={emailRef}
              value={email}
              style={styles.inputbox}
              placeholder="E-mail Address"
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
          <View style={styles.input} >
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
          <TouchableOpacity style={styles.logBtn}  onPress={handleSubmitButton} >
             
              <Text style={styles.loginBtnText}>Register</Text>
            
          </TouchableOpacity >
        </View>
      </View>
    </ScrollView>
  );
};
export default RegisterScreen;