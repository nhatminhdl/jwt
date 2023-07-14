import types from "../types";

const initial_state = {
    userData: {}
}

export default function(state = initial_state,actions){
    switch (actions.type) {
        case types.LOGIN:
            const data = actions.payload
            return {userData: data};
        
        default:
            return {...state};
    }
}

