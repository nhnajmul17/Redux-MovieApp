import React, { useEffect } from 'react';
// import { apikey } from '../../Tools/Api/Apikey';
import { useDispatch } from 'react-redux'
// import { addMovies } from '../../Tools/Redux/Movie/MovieSlice'
import Movies from '../Movies/Movies.js'
import { fetchMovies, fetchShows } from '../../Tools/Redux/Movie/MovieSlice'


const Home = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        /*   fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=harry&type=movie`)
              .then(res => res.json())
              .then(data => (dispatch(addMovies(data)))) */
        dispatch(fetchMovies())
        dispatch(fetchShows())
    }, [dispatch])


    return (
        <div>
            <div className="banner-img"></div>

            <Movies></Movies>


        </div>
    );
};

export default Home;