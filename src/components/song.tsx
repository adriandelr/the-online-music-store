import React from "react";
import { updateAlbum } from "../firebase/albumService";

import { FaRegPlayCircle, FaPlayCircle } from "react-icons/fa";

export interface SongProps {
  album: any;
  song: any;
  artist: string;
  isTopTen: boolean;
  showButtons: boolean;
}

export interface SongState {
  playCount: number;
}

class Song extends React.Component<SongProps, SongState> {
  state = { playCount: 0 };
  render() {
    const { album, song, artist, isTopTen, showButtons } = this.props;
    this.state.playCount = song.playCount;
    return (
      <li
        className={`d-flex flex-row justify-content-between ${
          isTopTen ? "list-group-item px-3 p-2 bg-light" : "m-1"
        }`}
      >
        <span className="p-0">
          <FaRegPlayCircle className={`text-muted mr-2`} />
          {artist}
          {" - "}
          {song.title}
        </span>
        <span className="p-0">
          <span className={`text-secondary initialism`}>
            {this.state.playCount}
          </span>
          {showButtons && (
            <kbd
              className="bg-light ml-1"
              role="button"
              onClick={() => {
                updateAlbum(song.songId, album, true).catch(() => {
                  album.songs[song.songId - 1]["playCount"] -= 1;
                });
                this.setState({});
              }}
            >
              <FaPlayCircle className={`text-dark opacity-2h5`} />
            </kbd>
          )}
        </span>
      </li>
    );
  }
}

export default Song;
