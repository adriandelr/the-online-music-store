import * as React from "react";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import Swal from "sweetalert2";

import { updateAlbums } from "../firebase/albumService";

export interface CheckoutModalProps {
  cartData: any;
  closeModal: any;
}

const CheckoutModal: React.SFC<CheckoutModalProps> = (props) => {
  const { cartData, closeModal } = props;
  let history = useHistory();

  const purchaseAlbums = () => {
    _.forEach(cartData.addedToCartAlbums, (album) => {
      album["purchasedCount"] += album["onCartCount"];
      album["onCartCount"] = 0;
    });
    updateAlbums(cartData.addedToCartAlbums);
    cartData.updateCartData();
  };

  return (
    <div className="cart-modal">
      {" "}
      <div className="cart-modal-box bg-light">
        <h4 className="list-group-item d-flex flex-row justify-content-between bg-white text-dark">
          Checkout
          <span className="text-secondary font-weight-bold">
            Total (${cartData.totalPrice})
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
            {cartData.addedToCartAlbums.length > 0 && (
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
                Swal.fire({
                  title: "Are you sure?",
                  text: "Placing your order.",
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, place it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    purchaseAlbums();
                    closeModal();
                    history.push("/the-online-music-store/purchase");
                    Swal.fire(
                      "Order succesful!",
                      "You are redirected to Purchase page.",
                      "success"
                    );
                  }
                });
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
