import _ from "lodash";
import albumData from "../constants/albumsData";
import Firebase from "./Firebase";

const db = Firebase.firestore();
const query = db.collection("albums");

const addAlbums = (isRandomData?: boolean) => {
  console.log("---- Adding Albums");
  _.forEach(albumData, (album: any, aIndex: number) => {
    album["albumRef"] = db.doc("albumId/" + (aIndex + 1));
    if (isRandomData) {
      album["onCartCount"] = _.random(3);
      album["purchasedCount"] = _.random(3);
      album["albumPrice"] = _.random(9, 21);
    }
    album.songs.forEach((song: any, sIndex: number) => {
      song["songId"] = sIndex + 1;
      song["albumId"] = aIndex + 1;
      if (isRandomData) song["playCount"] = _.random(3, 333);
    });
    query
      .doc(album.albumId)
      .set(album)
      .then(() => {
        console.log("Document written with ID: ", album.albumId);
        if (albumData.length - 1 == aIndex)
          console.log("-- Done Retreiving Albums");
      })
      .catch((error: any) => {
        console.error("Error adding document: ", error);
      });
  });
};

const clearAlbums = async (
  path: string,
  isInit: boolean,
  isRandomData?: boolean
) => {
  console.log("---- Deleting Albums");
  const snapshot = await query.get();
  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
    console.log("Document deleted with ID: ", doc.id);
  });
  await batch
    .commit()
    .then(() => {
      console.log("-- Done Delete");
      if (isInit) addAlbums(isRandomData);
    })
    .catch((error: any) => {
      console.error("Error deleting document: ", error);
    });
};

const initAlbums = (isRandomData?: boolean) => {
  console.log("---- Initializing Albums");
  query.get().then((snapshot) => {
    if (snapshot.empty) {
      addAlbums();
    } else {
      clearAlbums("albums", true, isRandomData);
    }
  });
};

const getAlbums = async () => {
  console.log("---- Getting Albums");
  const albums: any = [];

  await query
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("Document retrieved with ID: ", doc.id);
        const song = Object.assign({ id: doc.id }, doc.data());
        albums.push(song);
      });
    })
    .catch((error: any) => {
      console.error("Error retrieving document: ", error);
    });
  return albums;
};

const updateAlbum = async (
  index: number = 0,
  album?: any,
  updatePlayCount?: boolean,
  updateCartCount?: any,
  updatePurchaseCount?: boolean
) => {
  console.log("---- Update Albums");
  if (updatePlayCount) {
    console.log("Update Play Count");
    album.songs[index - 1]["playCount"] += 1;
  }
  console.log(updateCartCount);
  if (updateCartCount === "inc") {
    console.log("Update Cart");
    album["onCartCount"] += 1;
  }
  if (updateCartCount === "dec") {
    console.log("Update Cart");
    album["onCartCount"] -= 1;
  }
  if (updatePurchaseCount) {
    console.log("Update Purchase");
    album["purchasedCount"] += 1;
  }
  await query
    .doc(album.albumId)
    .set(album)
    .then(() => {
      console.log("Document updated with ID: ", album.albumId);
    })
    .catch((error: any) => {
      console.error("Error updating document: ", error);
    });
};

const updateAlbums = async (albums?: any) => {
  console.log("---- Update Batch Albums");
  const batch = db.batch();

  albums.forEach((album: any, aIndex: number) => {
    query
      .doc(album.albumId)
      .set(album)
      .then(() => {
        console.log("Document updated with ID: ", album.albumId);
      })
      .catch((error: any) => {
        console.error("Error updating document: ", error);
      });
  });

  await batch
    .commit()
    .then(() => {
      console.log("-- Done Update Batch Albums");
    })
    .catch((error: any) => {
      console.error("Error updating batch document: ", error);
    });
};

export { initAlbums, getAlbums, updateAlbum, updateAlbums };
