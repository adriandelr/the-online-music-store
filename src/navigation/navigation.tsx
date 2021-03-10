import React from "react";
import _, { update } from "lodash";
import {
  BrowserRouter as Router,
  HashRouter,
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
  state = { addedToCartAlbums: [], totalCartItems: 0, totalCartPrice: 0 };
  albums = this.props.albums;

  componentDidMount() {
    this.updateCartData();
  }

  updateCartData = () => {
    let addedToCartAlbums = _.filter(
      this.albums,
      (album) => album.onCartCount > 0
    );
    _.forEach(addedToCartAlbums, (album) => {
      album["totalPrice"] = album.onCartCount * album.albumPrice;
    });
    this.setState({
      addedToCartAlbums: addedToCartAlbums,
      totalCartItems: _.sumBy(addedToCartAlbums, "onCartCount"),
      totalCartPrice: _.sumBy(addedToCartAlbums, "totalPrice"),
    });
  };

  render() {
    const { albums } = this.props;
    return (
      <HashRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink
            to="/the-online-music-store"
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
                to="/the-online-music-store/home"
                activeClassName="text-info"
                className="nav-item nav-link text-decoration-none"
              >
                Home <span className="sr-only">(current)</span>
              </NavLink>
              <NavLink
                to="/the-online-music-store/albums"
                activeClassName="text-info"
                className="nav-item nav-link text-decoration-none"
              >
                Albums
              </NavLink>
              <NavLink
                to="/the-online-music-store/purchase"
                activeClassName="text-info"
                className="nav-item nav-link text-decoration-none"
              >
                Purchase
              </NavLink>
              <NavLink
                to="/the-online-music-store/cart"
                activeClassName="text-info"
                className="nav-item nav-link text-decoration-none"
              >
                Cart ({this.state.totalCartItems})
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
        <Route exact path="/the-online-music-store/cart">
          <CartScreen
            cartData={this.state}
            updateCartData={this.updateCartData}
            albums={albums}
          />
        </Route>
        <Route exact path="/the-online-music-store/purchase">
          <PurchaseScreen albums={albums} />
        </Route>
        <Route exact path="/the-online-music-store/albums">
          <AlbumsScreen
            albums={albums}
            isTopTen={false}
            showButtons={true}
            updateCartData={this.updateCartData}
          />
        </Route>
        <Route exact path="/the-online-music-store/home">
          <HomeScreen albums={albums} isTopTen={true} showButtons={false} />
        </Route>
        <Route exact path="/the-online-music-store">
          <Redirect
            exact
            from="/the-online-music-store"
            to="/the-online-music-store/home"
          />
        </Route>
        <Route exact path="/">
          <Redirect exact from="/" to="/the-online-music-store/" />
        </Route>
      </HashRouter>
    );
  }
}

export default Navigation;
