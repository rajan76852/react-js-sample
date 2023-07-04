import "../styles.css";
import MoviePlaylist from "../components/MoviePlaylist";
import SongPlaylist from "../components/SongPlaylist";

export default function ReduxToolKit() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
