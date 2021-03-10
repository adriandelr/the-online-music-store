import * as React from "react";
import { useHistory } from "react-router-dom";
import _ from "lodash";

import { updateAlbums } from "../firebase/albumService";

export interface CheckoutModalProps {
  albums: any;
  totalPrice: number;
  closeModal: any;
}

const CheckoutModal: React.SFC<CheckoutModalProps> = (props) => {
  const { albums, totalPrice, closeModal } = props;
  let history = useHistory();

  const purchaseAlbums = () => {
    _.forEach(albums, (album) => {
      album["purchasedCount"] += album["onCartCount"];
      album["onCartCount"] = 0;
    });
    updateAlbums(albums);
  };

  return (
    <div className="cart-modal">
      {" "}
      <div className="cart-modal-box bg-light">
        <h4 className="list-group-item d-flex flex-row justify-content-between bg-white text-dark">
          Checkout
          <span className="text-secondary font-weight-bold">
            Total (${totalPrice})
          </span>
        </h4>
        <div className="checkout-table">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Album</th>
                <th scope="col">Album Artist</th>
                <th scope="col">Amount</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            {albums.length > 0 && (
              <tbody>
                {albums.map((album: any, index: number) => (
                  <tr key={album.albumId}>
                    <th scope="row">{index}</th>
                    <td>{album.albumName}</td>
                    <td>{album.albumArtist}</td>
                    <td>{album.onCartCount}</td>
                    <td>${album.albumPrice}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
        <div className="cart-modal-footer">
          <div className="d-flex flex-row justify-content-between">
            <kbd
              className="text-light bg-secondary m-3 p-2"
              role="button"
              onClick={() => {
                closeModal();
              }}
            >
              Back
            </kbd>
            <kbd
              className="text-light font-weight-bold bg-dark m-3 p-2"
              role="button"
              onClick={() => {
                purchaseAlbums();
                closeModal();
                history.push("/the-online-music-store/purchase");
              }}
            >
              Place Order
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
