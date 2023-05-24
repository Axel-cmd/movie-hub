import React, { createContext, useContext, useEffect, useState } from "react";
import { List, ListId } from "../models/movieList.model";
import { deleteDataInAsyncStorage, getDataInAsyncStorage, storeDataInAsyncStorage } from "../functions/storage";


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
    const [movieList, setMovieList] = useState<List[]>([]);

    const getUserMovieList = async () => {
        const result = await getDataInAsyncStorage("movies")
        if(result) {
            setMovieList(JSON.parse(result));
        } else {
            // ajouter la liste par défaut si y en a pas dans le AsyncStorage
            setMovieList([
                {
                    id: ListId.nextId,
                    name: "A regarder",
                    movies: []
                }
            ])
        }
    }

    /** 
     * S'éxecute une fois à l'initialisation du composant 
     * pour récupérer les données dans le async storage
    */
    useEffect(() => {
        getUserMovieList();
    }, [])

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

        // récupérer la valeur actuelle de movieList et en faire une copie (instance différente)
        let lists: List[] = JSON.parse(JSON.stringify(movieList));

        // trouver la liste 
        const list = lists.find(r => r.id == listId);
        // le film est-il déjà présent ?
        const movieAlreadyExist = list?.movies.includes(movieId);

        if(!list || movieAlreadyExist) return;

        // ajouter le film dans la liste correspondante
        list.movies.push(movieId);

        setMovieList(lists);

        // const movies = JSON.stringify(movieList);
        storeDataInAsyncStorage("movies", JSON.stringify(lists));
    }


    return (
        <AppContext.Provider value={{searchMovie, currentSearchValue, selectedMovie, setSelectedMovie, movieList, createList, addMovieInList}} >
            {children}
        </AppContext.Provider>

    )

}
export const useAppContext = () => useContext(AppContext) as IAppContext;