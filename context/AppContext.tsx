import React, { createContext, useContext, useState } from "react";
import { List, ListId } from "../models/movieList.model";


export interface IAppContext {
    searchMovie: (searchValue: string) => void,
    currentSearchValue: string,
    selectedMovie: string | null,
    setSelectedMovie: any,
    movieList: List[],
    createList: (name: string) => void,
    addMovieInList: (listId: number, movieId: number) => void
}

const AppContext = createContext<IAppContext | null>(null);

export const AppProvider = ({children}: {children: any}) => {

    /** valeur de recherche actuelle */
    const [currentSearchValue, setCurrentSearchValue] = useState("");
    /** Film sélectionné actuellement */
    const [selectedMovie, setSelectedMovie] = useState<string | null>(null)
    /** Tableau des listes de l'utilisateur */
    const [movieList, setMovieList] = useState<List[]>([
        {
            id: ListId.nextId,
            name: "A regarder",
            movies: []
        }
    ]);

    /**
     * Méthode lors de la recherche d'un livre
     * @param searchValue 
     */
    const searchMovie = (searchValue: string) => {
        setCurrentSearchValue(searchValue)
    }
    /**
     * Créer une liste
     * @param name nom de la liste
     */
    const createList = (name: string) => {
        setMovieList((prev: List[]) => (
            [
                ...prev,
                {
                    id: ListId.nextId,
                    name,
                    movies: []
                },
            ]
        ))
    }
    /**
     * Ajouter un film dans une liste
     * @param listId id de la liste
     * @param movieId id du film
     */
    const addMovieInList = (listId: number, movieId: number) => {
        // bloquer l'ajout du film s'il y est déjà
        const list = movieList.find(r => r.id == listId);
        const movie = list?.movies.find( m => m == movieId);
        if(movie) return;
        // ajouter le film dans la liste
        setMovieList( (prev: List[]) => (
            prev.map( list => {
                if(list.id == listId) {
                    return {
                        ...list,
                        movies: [
                            movieId,
                            ...list.movies
                        ]
                    }
                } else {
                    return list;
                }
            })
        ))
    }


    return (
        <AppContext.Provider value={{searchMovie, currentSearchValue, selectedMovie, setSelectedMovie, movieList, createList, addMovieInList}} >
            {children}
        </AppContext.Provider>

    )

}
export const useAppContext = () => useContext(AppContext) as IAppContext;