import {Home, Profile} from '../index';
import React from 'react';

function MainStack(Stack){
    return (
        <>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Profile' component={Profile}/>
        </>
    )
}

export default MainStack;