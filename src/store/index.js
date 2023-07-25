import { configureStore } from "@reduxjs/toolkit";
import { songsReducers, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducers, addMovie, removeMovie } from "./slices/movieSlice";
import { reset } from "./actions";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/carFormSlice";
const store = configureStore({
  reducer: {
    songs: songsReducers,
    movies: moviesReducers,
    cars: carsReducer,
    form: formReducer,
  },
});

export {
  store,
  addMovie,
  removeMovie,
  addSong,
  removeSong,
  reset,
  changeName,
  changeCost,
  addCar,
  removeCar,
  changeSearchTerm,
};
