import { useEffect, useState } from "react";
import { requestMovieAPI } from "../../api/request";
import {  } from "react-native"


const Movie = () => {

    const [movie, setMovie] = useState({})

    //uste pour tester les requêtes à l'api 
    const getData = async () => {
        const test = await requestMovieAPI.get("movie/550")
        setMovie(test.data)
        console.log(test.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>

        </>
    )

}

export default Movie;