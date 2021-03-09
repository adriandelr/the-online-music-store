import React, { useState } from "react";
import _ from "lodash";

import { updateAlbum } from "../firebase/albumService";
import CheckoutModal from "./checkoutModal";

export interface CartScreenProps {
  albums: any;
}

const CartScreen: React.SFC<CartScreenProps> = (props) => {
  const [albums, setAlbums] = useState(props.albums);
  const [showModal, setShowModal] = useState(false);

  let addedToCartAlbums = _.filter(albums, (album) => album.onCartCount > 0);

  _.forEach(addedToCartAlbums, (album) => {
    album["totalPrice"] = album.onCartCount * album.albumPrice;
  });

  let totalPrice = _.sumBy(addedToCartAlbums, "totalPrice");

  let totalItems = _.sumBy(addedToCartAlbums, "onCartCount");

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      {showModal && addedToCartAlbums.length > 0 && (
        <CheckoutModal
          albums={addedToCartAlbums}
          totalPrice={totalPrice}
          closeModal={closeModal}
        />
      )}
      <div className="m-5">
        <h3 className="text-dark mb-5">
          My Cart {totalItems > 0 && <span>({totalItems})</span>}
        </h3>
        {addedToCartAlbums.length > 0 && (
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Album</th>
                <th scope="col">Album Artist</th>
                <th scope="col">Amount</th>
                <th scope="col">Price</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>
              {addedToCartAlbums.map((album: any, index: number) => (
                <tr key={album.albumId}>
                  <th scope="row">{index}</th>
                  <td>{album.albumName}</td>
                  <td>{album.albumArtist}</td>
                  <td>{album.onCartCount}</td>
                  <td>${album.albumPrice}</td>
                  <td>
                    <kbd
                      className="text-secondary bg-light ml-1"
                      role="button"
                      onClick={() => {
                        updateAlbum(0, album, false, "dec").catch(() => {
                          album["onCartCount"] -= 1;
                        });
                        setAlbums(addedToCartAlbums);
                      }}
                    >
                      Remove
                    </kbd>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-secondary font-weight-bold">
                  Total (${totalPrice})
                </td>
                <td>
                  <kbd
                    className="text-info bg-light ml-1"
                    role="button"
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    Checkout
                  </kbd>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
        {addedToCartAlbums.length < 1 && (
          <h5 className="text-muted mt-5">No albums added to cart.</h5>
        )}
      </div>
    </React.Fragment>
  );
};

export default CartScreen;
