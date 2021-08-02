import React,{ createContext,useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initState = {
    name:"prabhash",
    role:"software developer",
    salary:"20k",
    address:"Hyderabad"
}

//global state
export const GlobalContext = createContext(initState);

//global provider
export const GlobalProvider = props =>{
    const [ state,dispatch ] = useReducer(AppReducer,initState)
    return (
        <GlobalContext.Provider value={{ data:state }}>
            {props.children}
        </GlobalContext.Provider>
    )
}