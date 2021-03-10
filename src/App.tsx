import React, { useState, useEffect } from "react";
import Nav from "./navigation/nav";
import "./constants/App.css";
import _ from "lodash";

// Manually add album collection to store
import { getAlbums } from "./firebase/albumService";

const App = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums().then((albums) => {
      setAlbums(albums);
    });
  }, []);

  return (
    <div className="App">{!_.isEmpty(albums) && <Nav albums={albums} />}</div>
  );
};

export default App;
