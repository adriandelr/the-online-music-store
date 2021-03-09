import React from "react";
import _ from "lodash";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import HomeScreen from "../screens/homeScreen";
import AlbumsScreen from "../screens/albumsScreen";
import PurchaseScreen from "../screens/purchaseScreen";
import CartScreen from "../screens/cartScreen";

import { initAlbums } from "../firebase/albumService";

export interface NavigationProps {
  albums: any;
}

export interface NavigationState {}

class Navigation extends React.Component<NavigationProps, NavigationState> {
  // state = { : }
  render() {
    const { albums } = this.props;
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink
            to="/"
            className="navbar-brand nav-item nav-link text-decoration-none"
          >
            The Online Music Store
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="/home"
                activeClassName="text-info"
                className="nav-item nav-link text-decoration-none"
              >
                Home <span className="sr-only">(current)</span>
              </NavLink>
              <NavLink
                to="/albums"
                activeClassName="text-info"
                className="nav-item nav-link text-decoration-none"
              >
                Albums
              </NavLink>
              <NavLink
                to="/purchase"
                activeClassName="text-info"
                className="nav-item nav-link text-decoration-none"
              >
                Purchase
              </NavLink>
              <NavLink
                to="/cart"
                activeClassName="text-info"
                className="nav-item nav-link text-decoration-none"
              >
                Cart
              </NavLink>
              <a
                className="reset-btn nav-item nav-link text-decoration-none text-muted position-absolute mr-5"
                role="button"
                onClick={() => {
                  if (
                    window.confirm(
                      "Reset Firestore Database?\nThese includes play, cart, and purchase counters.\n\nPage will reload shortly."
                    )
                  ) {
                    initAlbums();
                    setTimeout(() => {
                      window.location.reload();
                    }, 1000);
                  }
                }}
              >
                Reset Data
              </a>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/cart">
            <CartScreen albums={albums} />
          </Route>
          <Route path="/purchase">
            <PurchaseScreen albums={albums} />
          </Route>
          <Route path="/albums">
            <AlbumsScreen albums={albums} isTopTen={false} showButtons={true} />
          </Route>
          <Route exact path="/home">
            <HomeScreen albums={albums} isTopTen={true} showButtons={false} />
          </Route>
          <Route exact path="/the-online-music-store">
            <Redirect exact from="/the-online-music-store" to="/home" />
          </Route>
          <Route exact path="/">
            <Redirect exact from="/" to="/home" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
