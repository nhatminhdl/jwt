import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {useSelector} from 'react-redux'


const Stack = createNativeStackNavigator();

function Router() {
  const userData = useSelector((state) => state);

  console.log("user data", userData);
    return (
      <NavigationContainer>
        <Stack.Navigator>
            {false ? MainStack(Stack) : AuthStack(Stack) }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default Router