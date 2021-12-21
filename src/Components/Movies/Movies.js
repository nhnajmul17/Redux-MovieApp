import React from 'react';
import { useSelector } from 'react-redux';
// import { getAllMovies } from '../../Tools/Redux/Movie/MovieSlice';
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

const Movies = () => {
    const movies = useSelector(state => state.movies.movies)
    const shows = useSelector(state => state.movies.shows)
    let renderMovies = "";
    renderMovies =
        movies.Response === 'True' ? (
            movies.Search.map((movie, index) => <MovieCard key={index} movie={movie}></MovieCard>)) : (<div> <h3>{movies.Error}</h3></div>);
    let renderShows = "";
    renderShows =
        shows.Response === 'True' ? (
            shows.Search.map((show, index) => <MovieCard key={index} movie={show}></MovieCard>)) : (<div> <h3>{movies.Error}</h3></div>);
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {renderMovies}
                </div>
            </div>
            <div className='movie-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    {renderShows}
                </div>
            </div>
        </div>
    );
};

export default Movies;