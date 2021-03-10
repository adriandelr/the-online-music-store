import React from "react";
import Album from "./album";
import _ from "lodash";

export interface AlbumsProps {
  albums: any;
  isTopTen: boolean;
  showButtons: boolean;
  updateCartData?: any;
}

export interface AlbumsState {}

class Albums extends React.Component<AlbumsProps, AlbumsState> {
  // state = { :  }
  render() {
    const {
      albums,
      isTopTen,
      showButtons,
      updateCartData: updateCartData,
    } = this.props;

    return (
      <div className="text-left m-5">
        {isTopTen && (
          <div className="d-flex justify-content-between">
            <h5 className="text-dark">Top 10 Best Selling Albums</h5>
            <small className="text-secondary mt-2 mr-3">Bought</small>
          </div>
        )}
        <ul className="list-group">
          {albums.map((album: any) => (
            <Album
              key={album.albumId}
              artist={album.albumArtist}
              album={album}
              song={album.song}
              isTopTen={isTopTen}
              showButtons={showButtons}
              updateCartData={updateCartData}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Albums;
