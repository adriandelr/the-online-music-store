import React, { useState } from "react";
import _ from "lodash";
import Swal from "sweetalert2";

import { updateAlbum } from "../firebase/albumService";
import CheckoutModal from "./checkoutModal";

export interface CartScreenProps {
  albums: any;
  cartData: any;
}

const CartScreen: React.SFC<CartScreenProps> = (props) => {
  const [albums, setAlbums] = useState(props.albums);
  const [showModal, setShowModal] = useState(false);
  const { cartData } = props;

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      {showModal && cartData.addedToCartAlbums.length > 0 && (
        <CheckoutModal cartData={cartData} closeModal={closeModal} />
      )}
      <div className="m-5">
        <h3 className="text-dark mb-5">My Cart</h3>
        {cartData.addedToCartAlbums.length > 0 && (
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
              {cartData.addedToCartAlbums.map((album: any, index: number) => (
                <tr key={album.albumId}>
                  <th scope="row" className="font-weight-normal">
                    {index}
                  </th>
                  <td className="font-weight-bold">{album.albumName}</td>
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
                        setAlbums(cartData.addedToCartAlbums);
                        cartData.updateCartData();
                        Swal.fire(
                          `${album.albumName}`,
                          "Album deleted from cart!",
                          "error"
                        );
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
                  Total (${cartData.totalCartPrice})
                </td>
                <td>
                  <kbd
                    className="text-info font-weight-bold bg-light ml-1"
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
        {cartData.addedToCartAlbums.length < 1 && (
          <h5 className="text-muted mt-5">No albums added to cart.</h5>
        )}
      </div>
    </React.Fragment>
  );
};

export default CartScreen;
