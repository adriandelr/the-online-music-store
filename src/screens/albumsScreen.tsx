import * as React from "react";
import _ from "lodash";

import Album from "../components/album";
import Songs from "../components/songs";

export interface AlbumsScreenProps {
  albums: any;
  isTopTen: boolean;
  showButtons: boolean;
  cartData: any;
}

const AlbumsScreen: React.SFC<AlbumsScreenProps> = (props) => {
  const { albums, isTopTen, showButtons, cartData: cartData } = props;

  return (
    <div className="p-5">
      {albums.map((album: any, aIndex: number) => (
        <div key={album.albumId} className="pb-1 mb-5">
          <Album
            key={album.albumId}
            artist={album.albumArtist}
            album={album}
            song={album.songs}
            showButtons={showButtons}
            cartData={cartData}
          />
          <Songs
            albums={albums}
            songs={album.songs}
            isTopTen={isTopTen}
            showButtons={showButtons}
          />
        </div>
      ))}
    </div>
  );
};

export default AlbumsScreen;
