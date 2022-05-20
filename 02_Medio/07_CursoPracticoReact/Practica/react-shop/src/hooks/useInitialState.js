import React, { useState } from 'react';

const InitialState = {
    cart:[]
}

const useInitialState =()=>{
    const [state, setState] = useState(InitialState);

    const addToCard = (payload) =>{

        setState({
                ...state,
                cart:[...state.cart, payload]

        });
    };
    return {
        state,
        addToCard
    }

}

export default useInitialState;