import React, { createContext, useContext, useState } from "react";


export interface IAppContext {
    searchMovie: (searchValue: string) => void,
    currentSearchValue: string,
    selectedMovie: string | null,
    setSelectedMovie: any
}

const AppContext = createContext<IAppContext | null>(null);

export const AppProvider = ({children}: {children: any}) => {

    const [currentSearchValue, setCurrentSearchValue] = useState("");

    const [selectedMovie, setSelectedMovie] = useState<string | null>(null)

    const searchMovie = (searchValue: string) => {
        setCurrentSearchValue(searchValue)
        console.log("searchValue : " + searchValue)
    }


    return (
        <AppContext.Provider value={{searchMovie, currentSearchValue, selectedMovie, setSelectedMovie}} >
            {children}
        </AppContext.Provider>

    )

}
export const useAppContext = () => useContext(AppContext) as IAppContext;