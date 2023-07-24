import { configureStore } from "@reduxjs/toolkit";
import {songsReducers,addSong,removeSong} from "./slice/songsSlice";
import {moviesReducers,addMovie,removeMovie} from "./slice/movieSlice";
import {reset} from './actions';
const store = configureStore({
    reducer: {
    songs: songsReducers,
    movies: moviesReducers,
  },
});


export {store,addMovie, removeMovie ,addSong, removeSong,reset };
