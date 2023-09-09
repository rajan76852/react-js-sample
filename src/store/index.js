import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
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
import { userReducer } from "./slices/userSlice";
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';
const store = configureStore({
  reducer: {
    songs: songsReducers,
    movies: moviesReducers,
    cars: carsReducer,
    form: formReducer,
    users: userReducer,   
      [albumsApi.reducerPath]: albumsApi.reducer,
      [photosApi.reducerPath]: photosApi.reducer
  },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware);
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
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
setupListeners(store.dispatch);
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from './apis/albumsApi';
export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from './apis/photosApi';
