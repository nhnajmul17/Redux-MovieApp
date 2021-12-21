import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../Tools/Redux/Movie/MovieSlice';

const MovieDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const details = useSelector(state => state.movies.details)
    useEffect(() => {
        dispatch(fetchDetails(id))
    }, [dispatch, id])
    return (
        <div>
            MovieDetails
        </div>
    );
};

export default MovieDetails;