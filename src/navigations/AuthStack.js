import {Login, Signup} from '../index';
import React from 'react';

function AuthStack(Stack){
    return (
        <>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Signup' component={Signup}/>
        </>
    )
}

export default AuthStack;
