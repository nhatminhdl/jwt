import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

import styles from './Signup.style'
import TextInputWithLabel from '../../Components/TextInputWithLabel/TextInputWithLabel'
import ButtonWithLoader from '../../Components/ButtonWithLoader/ButtonWithLoader'

import validator from '../../utils/validations'
import { showError } from '../../utils/helperFunction'

const Signup = ({navigation}) => {

  const [state, setState] = useState({
    isLoading: false,
    userName: '',
    email: '',
    password:'',
    isSecure: true,
  })

  const {isLoading, userName,email, password,isSecure} = state;

  const updateState = (data) => setState(()=>({...state, ...data}))

  const isValidData =() => {
    const error = validator({
      userName,
      email,
      password,
     
    })

    if(error){
      showError(error);
      return false;
    }
    return true;
  }

  const onLogin = () => {
    const checkValid = isValidData();
    if (checkValid) {
      navigation.navigate('Signup');
    }
   
  }
  return (
    <View style={styles.container}>
      
      <TextInputWithLabel
        label={'User name'}
        placeHolder={'Enter your user name'}
        onChangeText={(userName)=> updateState({userName})}
      />

      <TextInputWithLabel
        label={'Email'}
        placeHolder={'Enter your mail'}
        onChangeText={(email)=> updateState({email})}
      />

      <TextInputWithLabel
        label={'Password'}
        placeHolder={'Enter your password'}
        secureTextEntry={isSecure}
        onChangeText={(password)=> updateState({password})}
      />

      <ButtonWithLoader
        text={'Signup'}
        onPress={onLogin}
      />
    </View>
  )
}

export default Signup