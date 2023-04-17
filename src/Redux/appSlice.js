import {createSlice} from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        movies: [],
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const {movies, setMovies} = appSlice.actions

export default appSlice.reducer