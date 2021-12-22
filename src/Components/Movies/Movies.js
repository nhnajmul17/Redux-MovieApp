import React from 'react';
import { useSelector } from 'react-redux';
// import { getAllMovies } from '../../Tools/Redux/Movie/MovieSlice';
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'
import Slider from "react-slick";

const Movies = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
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
                    <Slider  {...settings}> {renderMovies} </Slider>
                </div>
            </div>
            <div className='movie-list'>
                <h2>Shows</h2>
                <div className='show-container'>
                    {renderShows}
                </div>
            </div>
        </div>
    );
};

export default Movies;