import React from "react";
import { updateAlbum } from "../firebase/albumService";

import { FaCompactDisc, FaCartPlus } from "react-icons/fa";

export interface AlbumProps {
  album: any;
  song: any;
  artist: string;
  isTopTen?: boolean;
  showButtons: boolean;
  updateCartData: any;
}

export interface AlbumState {}

class Album extends React.Component<AlbumProps, AlbumState> {
  //   state = { : 0 };
  render() {
    const {
      album,
      song,
      artist,
      isTopTen,
      showButtons,
      updateCartData: updateCartData,
    } = this.props;

    return (
      <li
        className={`list-group-item d-flex flex-row justify-content-between bg-light px-3`}
      >
        <span className="p-0">
          <FaCompactDisc className={`text-muted mr-2`} />
          <span className="font-weight-bold">{album.albumName}</span>
          {"  "}
          <span className="text-muted">{artist}</span>
          {!isTopTen && album.purchasedCount > 0 && (
            <span className="text-success initialism ml-3">
              PURCHASED - {album.purchasedCount}
            </span>
          )}
        </span>
        <span className="p-0">
          <span
            role="button"
            onClick={() => {
              updateAlbum(song.songId, album, false, "inc").catch(() => {
                album["onCartCount"] -= 1;
              });
              this.setState({});
              updateCartData();
            }}
          >
            {!isTopTen && <FaCartPlus className={`text-dark mr-2`} />}
            {isTopTen && (
              <span className="text-secondary initialism">
                {album.purchasedCount}
              </span>
            )}
            {!isTopTen && (
              <span className="text-secondary initialism">
                {album.onCartCount}
              </span>
            )}
            {showButtons && (
              <kbd className="text-dark bg-light ml-1">Add To Cart</kbd>
            )}
          </span>
          {!isTopTen && (
            <span className="text-dark font-weight-bold ml-5">
              $ {album.albumPrice}
            </span>
          )}
        </span>
      </li>
    );
  }
}

export default Album;
