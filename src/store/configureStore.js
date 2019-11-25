import {createStore} from 'redux';

import countReducer from './../component/counterReducer'

export const configureStore=()=>{

    const store=createStore(countReducer);
    return store;
    
}