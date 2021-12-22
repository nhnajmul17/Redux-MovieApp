import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apikey } from '../../Api/Apikey';

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=harry&type=movie`)
            .then(res => res.json())
        return response
    }
)
export const fetchShows = createAsyncThunk(
    'movies/fetchShows',
    async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=friends&type=series`)
            .then(res => res.json())
        return response
    }
)
export const fetchDetails = createAsyncThunk(
    'movies/fetchDetails',
    async (id) => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}&plot=full`)
            .then(res => res.json())
        return response
    }
)

const initialState = {
    movies: {},
    shows: {},
    details: {}
}

export const MovieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, () => {
            // return { ...state, movies: action.payload }
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = (action.payload)
        })
        builder.addCase(fetchShows.fulfilled, (state, action) => {
            state.shows = (action.payload)
        })
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.details = (action.payload)
        })
    },

})

export const { addMovies } = MovieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export default MovieSlice.reducer