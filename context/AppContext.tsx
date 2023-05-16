import React, { createContext, useContext, useState } from "react";


export interface IAppContext {
    searchMovie: (searchValue: string) => void,
    currentSearchValue: string,
}

const AppContext = createContext<IAppContext | null>(null);

export const AppProvider = ({children}: {children: any}) => {

    const [currentSearchValue, setCurrentSearchValue] = useState("");


    const searchMovie = (searchValue: string) => {
        setCurrentSearchValue(searchValue)
        console.log("searchValue : " + searchValue)
    }


    return (
        <AppContext.Provider value={{searchMovie, currentSearchValue}} >
            {children}
        </AppContext.Provider>

    )

}
export const useAppContext = () => useContext(AppContext) as IAppContext;