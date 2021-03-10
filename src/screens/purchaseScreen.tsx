import * as React from "react";
import _ from "lodash";

export interface PurchaseScreenProps {
  albums: any;
}

const PurchaseScreen: React.SFC<PurchaseScreenProps> = (props) => {
  const { albums } = props;

  let purchasedAlbums = _.filter(albums, (album) => album.purchasedCount > 0);

  _.forEach(purchasedAlbums, (album) => {
    album["totalPrice"] = album.purchasedCount * album.albumPrice;
  });

  let totalPrice = _.sumBy(purchasedAlbums, "totalPrice");

  purchasedAlbums = _.orderBy(purchasedAlbums, ["purchasedCount"], ["desc"]);

  return (
    <div className="m-5">
      <h3 className="text-dark mb-5">Purchased Albums</h3>
      {purchasedAlbums.length > 0 && (
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
          <tbody>
            {purchasedAlbums.map((album: any, index: number) => (
              <tr key={album.albumId}>
                <th scope="row">{index}</th>
                <td>{album.albumName}</td>
                <td>{album.albumArtist}</td>
                <td>{album.purchasedCount}</td>
                <td>${album.albumPrice}</td>
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
            </tr>
          </tfoot>
        </table>
      )}
      {purchasedAlbums.length < 1 && (
        <h5 className="text-muted mt-5">No purchased albums.</h5>
      )}
      {purchasedAlbums.length > 0 && (
        <h5 className="text-muted mt-5">Thank you for your purchase!</h5>
      )}
    </div>
  );
};

export default PurchaseScreen;
