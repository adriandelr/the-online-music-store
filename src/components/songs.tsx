import React from "react";
import Song from "./song";

export interface SongsProps {
  albums: any;
  songs: any;
  isTopTen: boolean;
  showButtons: boolean;
}

export interface SongsState {}

class Songs extends React.Component<SongsProps, SongsState> {
  // state = { :  }
  render() {
    const { albums, songs, isTopTen, showButtons } = this.props;

    return (
      <div className={`text-left ${isTopTen ? "m-5" : "m-4"}`}>
        {isTopTen && (
          <div className="d-flex justify-content-between">
            <h5 className="text-dark">Top 10 Most Played Songs</h5>
            <small className="text-secondary mt-2 mr-3">Plays</small>
          </div>
        )}
        <ul className="list-group">
          {songs.map((song: any) => (
            <Song
              key={isTopTen ? song.vId : song.songId}
              artist={song.artist}
              album={albums[song.albumId - 1]}
              song={song}
              isTopTen={isTopTen}
              showButtons={showButtons}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Songs;
