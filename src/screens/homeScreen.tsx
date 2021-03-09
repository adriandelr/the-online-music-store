import React from "react";
import _ from "lodash";

import Albums from "../components/albums";
import Songs from "../components/songs";

export interface HomeScreenProps {
  albums: any;
  isTopTen: boolean;
  showButtons: boolean;
}

const HomeScreen: React.SFC<HomeScreenProps> = (props: any) => {
  const { albums, isTopTen, showButtons } = props;

  // Process top ten
  let topTenAlbums = [];
  topTenAlbums = _.take(_.orderBy(albums, ["onCartCount"], ["desc"]), 10);

  // Merge songs, flatten, orderByPlaycount, take top 10, and generate virtual indexes
  let topTenSongs: any = [];
  _.forEach(albums, (album: any) => {
    topTenSongs.push(album.songs);
  });
  topTenSongs = _.take(
    _.orderBy(_.flatten(topTenSongs), ["playCount"], ["desc"]),
    10
  );
  topTenSongs = _.map(topTenSongs, (song: any, index) => {
    song["vId"] = index + 1;
    return song;
  });

  return (
    <React.Fragment>
      <Albums
        albums={topTenAlbums}
        isTopTen={isTopTen}
        showButtons={showButtons}
      />
      <Songs
        albums={albums}
        songs={topTenSongs}
        isTopTen={isTopTen}
        showButtons={showButtons}
      />
    </React.Fragment>
  );
};

export default HomeScreen;
