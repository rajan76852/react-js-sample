import "../styles.css";

import MoviePlaylist from "../components/MoviePlaylist";
import SongPlaylist from "../components/SongPlaylist";
import { useDispatch } from "react-redux";
import { reset } from "../store";

export default function ReduxToolKit() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button
        onClick={() => handleResetClick()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
