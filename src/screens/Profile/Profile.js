import { View, Text, Alert } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import ButtonWithLoader from '../../Components/ButtonWithLoader/ButtonWithLoader';
import actions from '../../redux/actions';

const Profile = () => {
  const userData = useSelector((state)=> state.auth.userData);

  const [isLoading, setLoading] = useState(false)
  console.log('====================================');
  console.log('profile', userData);
  console.log('====================================');
  
  const onLogoutAlert = () => {
    Alert.alert(
      'Logout',
      'Are you sure, you want logout from this device',
      [{text: 'Yes', onPress: logout}, {text: 'No',}],
      {cancelable: true}
    )
  }

  const logout = () => {
    setLoading(true)
    setTimeout(()=>{
      actions.logout();
      setLoading(false)
    },2000)
   
  } 
  
  return (
    <View>
      <Text>{userData.token_type}</Text>
      <Text>{userData.expires_in}</Text>
      <ButtonWithLoader
        isLoading={isLoading}
        text={'Logout'}
        onPress={onLogoutAlert}
      />
    </View>
  )
}

export default Profile