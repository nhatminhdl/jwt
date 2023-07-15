
import React from 'react';
import TabRoutes from './TabRoutes';

function MainStack(Stack){
    return (
        <>
            <Stack.Screen
                name= 'Home'
                component={TabRoutes}
            />
        </>
    )
}

export default MainStack;