import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

import styles from './Login.style'
import TextInputWithLabel from '../../Components/TextInputWithLabel/TextInputWithLabel'
import ButtonWithLoader from '../../Components/ButtonWithLoader/ButtonWithLoader'

import validator from '../../utils/validations'
import { showError } from '../../utils/helperFunction'
import actions from '../../redux/actions'
const Login = ({navigation}) => {

  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password:'',
    isSecure: true,
  })

  const {isLoading, email, password,isSecure} = state;

  const updateState = (data) => setState(()=>({...state, ...data}))

  const isValidData =() => {
    const error = validator({
      email,
      password,
    })

    if(error){
      showError(error);
      return false;
    }
    return true;
  }

  const onLogin = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      updateState({isLoading: true})
      try {
        const res = await actions.login({
          "CompanyCD": "2913",
          "UserName": email,
          "Password": password,
          "TypeCompany": "c200"
        })
        
        // console.log('res ====>', res.token);
        updateState({isLoading: false})
      } catch (error) {
        console.log('error raised');
        updateState({isLoading: false});
        showError(error.message);
      }
      // navigation.navigate('Signup');
    }
   
  }
  return (
    <View style={styles.container}>
      
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
        text={'Login'}
        onPress={onLogin}
        isLoading={isLoading}
      />

      <ButtonWithLoader
        text={'Signup'}
        onPress={() => navigation.navigate('Signup')}
        
      />
    </View>
  )
}

export default Login