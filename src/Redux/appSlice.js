import {createSlice} from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        movies: [],
        query:'q',
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setQuery: (state, action) => {
            state.query = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {movies, setMovies, setQuery, query} = appSlice.actions

export default appSlice.reducer