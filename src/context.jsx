import { useContext } from "react"
import React from "react";
import { useState } from "react";
import getMovie from "./services/getMovie";

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [query, setQuery] = useState('matrix')
    const {isLoading, error, data: movies} = getMovie(`&s=${query}`);
    return (
        <AppContext.Provider value={{isLoading, error,movies, query}}>
            {children} 
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}