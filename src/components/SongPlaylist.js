import { createRandomSong } from "../data";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "../store";
function SongPlaylist() {
  // To Do:
  const dispatch = useDispatch();
  // Get list of songs
  const songPlaylist = useSelector((state) => state.songs);

  const handleSongAdd = (song) => {
    // To Do:
    // Add song to list of songs
    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
