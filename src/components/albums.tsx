import React from "react";
import Album from "./album";
import _ from "lodash";

export interface AlbumsProps {
  albums: any;
  isTopTen: boolean;
  showButtons: boolean;
}

export interface AlbumsState {}

class Albums extends React.Component<AlbumsProps, AlbumsState> {
  // state = { :  }
  render() {
    const { albums, isTopTen, showButtons } = this.props;

    return (
      <div className="text-left m-5">
        {isTopTen && <h5>Top 10 Best Selling Albums</h5>}
        <ul className="list-group">
          {albums.map((album: any) => (
            <Album
              key={album.albumId}
              artist={album.albumArtist}
              album={album}
              song={album.song}
              isTopTen={isTopTen}
              showButtons={showButtons}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Albums;
