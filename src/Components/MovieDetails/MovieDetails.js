import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../Tools/Redux/Movie/MovieSlice';
import './MovieDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp, faFilm, faCalendar } from '@fortawesome/free-solid-svg-icons'

const MovieDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const details = useSelector(state => state.movies.details)
    console.log(details)
    useEffect(() => {
        dispatch(fetchDetails(id))
    }, [dispatch, id])
    return (
        <div className='movie-section'>
            <div className="section-left">
                <div className="movie-title">
                    {details.Title}
                </div>
                <div className="movie-rating">
                    <span>IMDB Rating:   <FontAwesomeIcon icon={faStar} />{details.imdbRating}</span>
                    <span>IMDB Votes:   <FontAwesomeIcon icon={faThumbsUp} /> {details.imdbVotes}</span>
                    <span>Runtime:   <FontAwesomeIcon icon={faFilm} /> {details.Runtime}</span>
                    <span>Year:   <FontAwesomeIcon icon={faCalendar} /> {details.Year}</span>
                </div>
                <div className="movie-plot">
                    {details.Plot}
                </div>
                <div className="movie-info">
                    <div>
                        <span>Director:</span>
                        <span>{details.Director}</span>
                    </div>
                    <div>
                        <span>Stars:</span>
                        <span>{details.Actors}</span>
                    </div>
                    <div>
                        <span>Genre:</span>
                        <span>{details.Genre}</span>
                    </div>
                    <div>
                        <span>Languages:</span>
                        <span>{details.Language}</span>
                    </div>
                    <div>
                        <span>Awards:</span>
                        <span>{details.Awards}</span>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={details.Poster} alt="Poster" />
            </div>
        </div>
    );
};

export default MovieDetails;