# The Online Music Store

The Online Music Store is a site where you can play, listen, and purchase top selling albums.

[View Site](https://adriandelr.github.io/the-online-music-store/)

## Purpose

This exercise showcases ReactJS features, and logical approaches in developing the app.

- Firebase/Firestore
- Globalization/Scoping
- Routing
- Data-DOM Manipulation
- E-Commerce
- Bootstrap
- Libraries

## Packages

- TypeScript
- React
- React Router DOM
- React Icons
- Firebase
- Bootstrap
- Lodash
- Sweetalert

## Usage

### Firestore

You can clear or randomize store data.

The `/constants/albumsData` contains JSON data that is added to the database.

The `/firebase/albumService` contains requests to add, update, and delete data records.

### Website

- Home
  - View List of Top 10 Best Selling Albums
  - View List of Top 10 Most Played Songs
  - View Purchase Counter
  - View Plays Counter
- Albums
  - View list of Albums
  - View numbers of purchase
  - Add to Cart
  - View Album price
  - View Album songs
  - View plays count of songs
  - Play song
- Cart
  - View table list of albums added to cart
  - Remove albums in Cart
  - Checkout Modal
    - Display of Checkout Modal
    - View total price
    - Place Order
- Purhase
  - View table list of purchased albums
- Other features
  - Sweetalert dialogs
  - Cart Pill Badge
  - Reset Firestore Data
  - Randomize Firestore Data

## Installation

To run locally, use `npm install` to install packages, then `npm start` to run on your local web server.
