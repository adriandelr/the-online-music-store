import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { updateAlbum } from "../firebase/albumService";

export interface AlbumProps {
  album: any;
  song: any;
  artist: string;
  isTopTen?: boolean;
  showButtons: boolean;
}

export interface AlbumState {}

class Album extends React.Component<AlbumProps, AlbumState> {
  //   state = { : 0 };
  render() {
    const { album, song, artist, isTopTen, showButtons } = this.props;

    return (
      <li className="list-group-item d-flex flex-row justify-content-between bg-light">
        <span className="p-0">
          <span className="font-weight-bold">{album.albumName}</span>
          {"  "}
          <span className="text-muted">{artist}</span>
          {"  "}
          {!isTopTen && (
            <span className="text-dark">(${album.albumPrice})</span>
          )}
          {!isTopTen && album.purchasedCount > 0 && (
            <span className="text-success initialism ml-1">
              PURCHASED ({album.purchasedCount})
            </span>
          )}
        </span>
        <span className="p-0">
          <FaCartPlus className="mr-2" />
          <span className="text-secondary initialism">
            ({album.onCartCount})
          </span>
          {showButtons && (
            <kbd
              className="text-dark bg-light ml-1"
              role="button"
              onClick={() => {
                updateAlbum(song.songId, album, false, "inc").catch(() => {
                  album["onCartCount"] -= 1;
                });
                this.setState({});
              }}
            >
              Add To Cart
            </kbd>
          )}
        </span>
      </li>
    );
  }
}

export default Album;
