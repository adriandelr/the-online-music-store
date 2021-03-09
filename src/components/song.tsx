import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { updateAlbum } from "../firebase/albumService";

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
        className={`${
          isTopTen ? "list-group-item p-2 bg-light" : "m-1"
        } d-flex flex-row justify-content-between`}
      >
        <span className="p-0">
          {artist}
          {" - "}
          {song.title}
        </span>
        <span className="p-0">
          <FaRegPlayCircle className="mr-2" />
          <span className="text-secondary initialism">
            ({this.state.playCount})
          </span>
          {showButtons && (
            <kbd
              className="text-dark bg-light ml-1"
              role="button"
              onClick={() => {
                updateAlbum(song.songId, album, true).catch(() => {
                  album.songs[song.songId - 1]["playCount"] -= 1;
                });
                this.setState({});
              }}
            >
              Play
            </kbd>
          )}
        </span>
      </li>
    );
  }
}

export default Song;
