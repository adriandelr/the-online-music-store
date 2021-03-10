(this["webpackJsonpthe-online-music-store"]=this["webpackJsonpthe-online-music-store"]||[]).push([[0],{40:function(t,e,n){},54:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),s=n(32),o=n.n(s),r=(n(40),n(26)),l=n(15),i=n(16),u=n(18),d=n(17),b=n(4),h=n.n(b),j=n(20),m=n(6),p=n(14),x=n.n(p),O=n(19),f=n.n(O),g=n(27),C=[{albumId:"1",albumName:"The Script",albumArtist:"The Script",onCartCount:0,purchasedCount:0,albumPrice:21,songs:[{title:"We Cry",artist:"The Script",playCount:0},{title:"Before The Worst",artist:"The Script",playCount:0},{title:"Talk You Down",artist:"The Script",playCount:0},{title:"The Man Who Can't Be Moved",artist:"The Script",playCount:0},{title:"Breakeven",artist:"The Script",playCount:0},{title:"Rusty Halo",artist:"The Script",playCount:0},{title:"The End Where I Begin",artist:"The Script",playCount:0},{title:"Fall For Anything",artist:"The Script",playCount:0},{title:"If You See Kay",artist:"The Script",playCount:0},{title:"I'm Yours",artist:"The Script",playCount:0},{title:"Anybody There",artist:"The Script",playCount:0}]},{albumId:"2",albumName:"Science & Faith",albumArtist:"The Script",onCartCount:0,purchasedCount:0,albumPrice:14,songs:[{title:"You Won't Feel A Thing",artist:"The Script",playCount:0},{title:"For The First Time",artist:"The Script",playCount:0},{title:"Nothing",artist:"The Script",playCount:0},{title:"Science & Faith",artist:"The Script",playCount:0},{title:"If You Ever Come Back",artist:"The Script",playCount:0},{title:"Long Gone And Moved On",artist:"The Script",playCount:0},{title:"Dead Man Walking",artist:"The Script",playCount:0},{title:"This = Love",artist:"The Script",playCount:0},{title:"Walk Away",artist:"The Script",playCount:0},{title:"Exit Wounds",artist:"The Script",playCount:0}]}],v=n(33),y=(n(43),n(59),v.a.initializeApp({apiKey:"AIzaSyDjJh5kNPwHGRzRdi_cYnxok7KfTvVfX-g",authDomain:"the-online-music-store.firebaseapp.com",projectId:"the-online-music-store",storageBucket:"the-online-music-store.appspot.com",messagingSenderId:"634983174557",appId:"1:634983174557:web:7330ac724f145ae35b5f74"}).firestore()),N=y.collection("albums"),T=function(t){console.log("---- Adding Albums"),h.a.forEach(C,(function(e,n){e.albumRef=y.doc("albumId/"+(n+1)),t&&(e.onCartCount=h.a.random(7),e.purchasedCount=h.a.random(3),e.albumPrice=h.a.random(9,21)),e.songs.forEach((function(e,a){e.songId=a+1,e.albumId=n+1,t&&(e.playCount=h.a.random(3,333))})),N.doc(e.albumId).set(e).then((function(){console.log("Document written with ID: ",e.albumId),C.length-1==n&&console.log("-- Done Retreiving Albums")})).catch((function(t){console.error("Error adding document: ",t)}))}))},w=function(){var t=Object(g.a)(f.a.mark((function t(e,n,a){var c,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("---- Deleting Albums"),t.next=3,N.get();case 3:return c=t.sent,s=y.batch(),c.docs.forEach((function(t){s.delete(t.ref),console.log("Document deleted with ID: ",t.id)})),t.next=8,s.commit().then((function(){console.log("-- Done Delete"),n&&T(a)})).catch((function(t){console.error("Error deleting document: ",t)}));case 8:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),k=function(t){console.log("---- Initializing Albums"),N.get().then((function(e){e.empty?T():w("albums",!0,t)}))},A=function(){var t=Object(g.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("---- Getting Albums"),e=[],t.next=4,N.get().then((function(t){t.forEach((function(t){console.log("Document retrieved with ID: ",t.id);var n=Object.assign({id:t.id},t.data());e.push(n)}))})).catch((function(t){console.error("Error retrieving document: ",t)}));case 4:return t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(){var t=Object(g.a)(f.a.mark((function t(){var e,n,a,c,s,o=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:0,n=o.length>1?o[1]:void 0,a=o.length>2?o[2]:void 0,c=o.length>3?o[3]:void 0,s=o.length>4?o[4]:void 0,console.log("---- Update Albums"),a&&(console.log("Update Play Count"),n.songs[e-1].playCount+=1),console.log(c),"inc"===c&&(console.log("Update Cart"),n.onCartCount+=1),"dec"===c&&(console.log("Update Cart"),n.onCartCount-=1),s&&(console.log("Update Purchase"),n.purchasedCount+=1),t.next=13,N.doc(n.albumId).set(n).then((function(){console.log("Document updated with ID: ",n.albumId)})).catch((function(t){console.error("Error updating document: ",t)}));case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=Object(g.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("---- Update Batch Albums"),n=y.batch(),e.forEach((function(t,e){N.doc(t.albumId).set(t).then((function(){console.log("Document updated with ID: ",t.albumId)})).catch((function(t){console.error("Error updating document: ",t)}))})),t.next=5,n.commit().then((function(){console.log("-- Done Update Batch Albums")})).catch((function(t){console.error("Error updating batch document: ",t)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=n(24),S=n(1),P=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.album,a=e.song,c=e.artist,s=e.isTopTen,o=e.showButtons,r=e.cartData;return Object(S.jsxs)("li",{className:"list-group-item d-flex flex-row justify-content-between bg-light px-3",children:[Object(S.jsxs)("span",{className:"p-0",children:[Object(S.jsx)(D.b,{className:"text-muted mr-2"}),Object(S.jsx)("span",{className:"font-weight-bold",children:n.albumName}),"  ",Object(S.jsx)("span",{className:"text-muted",children:c}),!s&&n.purchasedCount>0&&Object(S.jsxs)("span",{className:"text-success initialism ml-3",children:["PURCHASED - ",n.purchasedCount]})]}),Object(S.jsxs)("span",{className:"p-0",children:[Object(S.jsxs)("span",{role:"button",onClick:function(){B(a.songId,n,!1,"inc").catch((function(){n.onCartCount-=1})),t.setState({}),r.updateCartData(),x.a.fire("".concat(n.albumName),"Album added to cart!","success")},children:[!s&&Object(S.jsx)(D.a,{className:"text-dark mr-2"}),s&&Object(S.jsx)("span",{className:"text-secondary initialism",children:n.purchasedCount}),!s&&Object(S.jsx)("span",{className:"text-secondary initialism",children:n.onCartCount}),o&&Object(S.jsx)("kbd",{className:"text-dark bg-light ml-1",children:"Add To Cart"})]}),!s&&Object(S.jsxs)("span",{className:"text-dark font-weight-bold ml-5",children:["$ ",n.albumPrice]})]})]})}}]),n}(c.a.Component),E=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.albums,n=t.isTopTen,a=t.showButtons,c=t.cartData;return Object(S.jsxs)("div",{className:"text-left m-5",children:[n&&Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsx)("h5",{className:"text-dark",children:"Top 10 Best Selling Albums"}),Object(S.jsx)("small",{className:"text-secondary mt-2 mr-3",children:"Bought"})]}),Object(S.jsx)("ul",{className:"list-group",children:e.map((function(t){return Object(S.jsx)(P,{artist:t.albumArtist,album:t,song:t.song,isTopTen:n,showButtons:a,cartData:c},t.albumId)}))})]})}}]),n}(c.a.Component),F=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={playCount:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.album,a=e.song,c=e.artist,s=e.isTopTen,o=e.showButtons;return this.state.playCount=a.playCount,Object(S.jsxs)("li",{className:"d-flex flex-row justify-content-between ".concat(s?"list-group-item px-3 p-2 bg-light":"m-1"),children:[Object(S.jsxs)("span",{className:"p-0",children:[Object(S.jsx)(D.d,{className:"text-muted mr-2"}),c," - ",a.title]}),Object(S.jsxs)("span",{className:"p-0",children:[Object(S.jsx)("span",{className:"text-secondary initialism",children:this.state.playCount}),o&&Object(S.jsx)("kbd",{className:"bg-light ml-1",role:"button",onClick:function(){B(a.songId,n,!0).catch((function(){n.songs[a.songId-1].playCount-=1})),t.setState({})},children:Object(S.jsx)(D.c,{className:"text-dark opacity-2h5"})})]})]})}}]),n}(c.a.Component),M=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.albums,n=t.songs,a=t.isTopTen,c=t.showButtons;return Object(S.jsxs)("div",{className:"text-left ".concat(a?"m-5":"m-4"),children:[a&&Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsx)("h5",{className:"text-dark",children:"Top 10 Most Played Songs"}),Object(S.jsx)("small",{className:"text-secondary mt-2 mr-3",children:"Plays"})]}),Object(S.jsx)("ul",{className:"list-group",children:n.map((function(t){return Object(S.jsx)(F,{artist:t.artist,album:e[t.albumId-1],song:t,isTopTen:a,showButtons:c},a?t.vId:t.songId)}))})]})}}]),n}(c.a.Component),R=function(t){var e,n=t.albums,a=t.isTopTen,s=t.showButtons;e=h.a.take(h.a.orderBy(n,["purchasedCount"],["desc"]),10);var o=[];return h.a.forEach(n,(function(t){o.push(t.songs)})),o=h.a.take(h.a.orderBy(h.a.flatten(o),["playCount"],["desc"]),10),o=h.a.map(o,(function(t,e){return t.vId=e+1,t})),Object(S.jsxs)(c.a.Fragment,{children:[Object(S.jsx)(E,{albums:e,isTopTen:a,showButtons:s}),Object(S.jsx)(M,{albums:n,songs:o,isTopTen:a,showButtons:s})]})},U=function(t){var e=t.albums,n=t.isTopTen,a=t.showButtons,c=t.cartData;return Object(S.jsx)("div",{className:"p-5",children:e.map((function(t,s){return Object(S.jsxs)("div",{className:"pb-1 mb-5",children:[Object(S.jsx)(P,{artist:t.albumArtist,album:t,song:t.songs,showButtons:a,cartData:c},t.albumId),Object(S.jsx)(M,{albums:e,songs:t.songs,isTopTen:n,showButtons:a})]},t.albumId)}))})},W=function(t){var e=t.albums,n=h.a.filter(e,(function(t){return t.purchasedCount>0}));h.a.forEach(n,(function(t){t.totalPrice=t.purchasedCount*t.albumPrice}));var a=h.a.sumBy(n,"totalPrice");return n=h.a.orderBy(n,["purchasedCount"],["desc"]),Object(S.jsxs)("div",{className:"m-5",children:[Object(S.jsx)("h3",{className:"text-dark mb-5",children:"Purchased Albums"}),n.length>0&&Object(S.jsxs)("table",{className:"table table-borderless",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"col",children:"#"}),Object(S.jsx)("th",{scope:"col",children:"Album"}),Object(S.jsx)("th",{scope:"col",children:"Album Artist"}),Object(S.jsx)("th",{scope:"col",children:"Amount"}),Object(S.jsx)("th",{scope:"col",children:"Price"})]})}),Object(S.jsx)("tbody",{children:n.map((function(t,e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"row",className:"font-weight-normal",children:e}),Object(S.jsx)("td",{className:"font-weight-bold",children:t.albumName}),Object(S.jsx)("td",{children:t.albumArtist}),Object(S.jsx)("td",{children:t.purchasedCount}),Object(S.jsxs)("td",{children:["$",t.albumPrice]})]},t.albumId)}))}),Object(S.jsx)("tfoot",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{}),Object(S.jsx)("td",{}),Object(S.jsx)("td",{}),Object(S.jsx)("td",{}),Object(S.jsxs)("td",{className:"text-secondary font-weight-bold",children:["Total ($",a,")"]})]})})]}),n.length<1&&Object(S.jsx)("h5",{className:"text-muted mt-5",children:"No purchased albums."}),n.length>0&&Object(S.jsx)("h5",{className:"text-muted mt-5",children:"Thank you for your purchase!"})]})},Y=function(t){var e=t.cartData,n=t.closeModal,a=Object(m.f)();return Object(S.jsxs)("div",{className:"cart-modal",children:[" ",Object(S.jsxs)("div",{className:"cart-modal-box bg-light",children:[Object(S.jsxs)("h4",{className:"list-group-item d-flex flex-row justify-content-between bg-white text-dark",children:["Checkout",Object(S.jsxs)("span",{className:"text-secondary font-weight-bold",children:["Total ($",e.totalPrice,")"]})]}),Object(S.jsx)("div",{className:"checkout-table",children:Object(S.jsxs)("table",{className:"table table-borderless",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"col",children:"#"}),Object(S.jsx)("th",{scope:"col",children:"Album"}),Object(S.jsx)("th",{scope:"col",children:"Album Artist"}),Object(S.jsx)("th",{scope:"col",children:"Amount"}),Object(S.jsx)("th",{scope:"col",children:"Price"})]})}),e.addedToCartAlbums.length>0&&Object(S.jsx)("tbody",{children:e.addedToCartAlbums.map((function(t,e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"row",className:"font-weight-normal",children:e}),Object(S.jsx)("td",{className:"font-weight-bold",children:t.albumName}),Object(S.jsx)("td",{children:t.albumArtist}),Object(S.jsx)("td",{children:t.onCartCount}),Object(S.jsxs)("td",{children:["$",t.albumPrice]})]},t.albumId)}))})]})}),Object(S.jsx)("div",{className:"cart-modal-footer",children:Object(S.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(S.jsx)("kbd",{className:"text-light bg-secondary m-3 p-2",role:"button",onClick:function(){n()},children:"Back"}),Object(S.jsx)("kbd",{className:"text-light font-weight-bold bg-dark m-3 p-2",role:"button",onClick:function(){x.a.fire({title:"Are you sure?",text:"Placing your order.",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, place it!"}).then((function(t){t.isConfirmed&&(h.a.forEach(e.addedToCartAlbums,(function(t){t.purchasedCount+=t.onCartCount,t.onCartCount=0})),I(e.addedToCartAlbums),e.updateCartData(),n(),a.push("/the-online-music-store/purchase"),x.a.fire("Order succesful!","You are redirected to Purchase page.","success"))}))},children:"Place Order"})]})})]})]})},$=function(t){var e=Object(a.useState)(t.albums),n=Object(r.a)(e,2),s=(n[0],n[1]),o=Object(a.useState)(!1),l=Object(r.a)(o,2),i=l[0],u=l[1],d=t.cartData;return Object(S.jsxs)(c.a.Fragment,{children:[i&&d.addedToCartAlbums.length>0&&Object(S.jsx)(Y,{cartData:d,closeModal:function(){u(!1)}}),Object(S.jsxs)("div",{className:"m-5",children:[Object(S.jsx)("h3",{className:"text-dark mb-5",children:"My Cart"}),d.addedToCartAlbums.length>0&&Object(S.jsxs)("table",{className:"table table-borderless",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"col",children:"#"}),Object(S.jsx)("th",{scope:"col",children:"Album"}),Object(S.jsx)("th",{scope:"col",children:"Album Artist"}),Object(S.jsx)("th",{scope:"col",children:"Amount"}),Object(S.jsx)("th",{scope:"col",children:"Price"}),Object(S.jsx)("th",{scope:"col",children:"Option"})]})}),Object(S.jsx)("tbody",{children:d.addedToCartAlbums.map((function(t,e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{scope:"row",className:"font-weight-normal",children:e}),Object(S.jsx)("td",{className:"font-weight-bold",children:t.albumName}),Object(S.jsx)("td",{children:t.albumArtist}),Object(S.jsx)("td",{children:t.onCartCount}),Object(S.jsxs)("td",{children:["$",t.albumPrice]}),Object(S.jsx)("td",{children:Object(S.jsx)("kbd",{className:"text-secondary bg-light ml-1",role:"button",onClick:function(){B(0,t,!1,"dec").catch((function(){t.onCartCount-=1})),s(d.addedToCartAlbums),d.updateCartData(),x.a.fire("".concat(t.albumName),"Album deleted from cart!","error")},children:"Remove"})})]},t.albumId)}))}),Object(S.jsx)("tfoot",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{}),Object(S.jsx)("td",{}),Object(S.jsx)("td",{}),Object(S.jsx)("td",{}),Object(S.jsxs)("td",{className:"text-secondary font-weight-bold",children:["Total ($",d.totalCartPrice,")"]}),Object(S.jsx)("td",{children:Object(S.jsx)("kbd",{className:"text-info font-weight-bold bg-light ml-1",role:"button",onClick:function(){u(!0)},children:"Checkout"})})]})})]}),d.addedToCartAlbums.length<1&&Object(S.jsx)("h5",{className:"text-muted mt-5",children:"No albums added to cart."})]})]})},z=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={addedToCartAlbums:[],totalCartItems:0,totalCartPrice:0,updateCartData:function(){var e=h.a.filter(t.albums,(function(t){return t.onCartCount>0}));h.a.forEach(e,(function(t){t.totalPrice=t.onCartCount*t.albumPrice})),t.setState({addedToCartAlbums:e,totalCartItems:h.a.sumBy(e,"onCartCount"),totalCartPrice:h.a.sumBy(e,"totalPrice")})}},t.albums=t.props.albums,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.state.updateCartData()}},{key:"render",value:function(){var t=this.props.albums;return Object(S.jsxs)(j.a,{children:[Object(S.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(S.jsx)(j.b,{to:"/the-online-music-store",className:"navbar-brand nav-item nav-link text-decoration-none",children:"The Online Music Store"}),Object(S.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(S.jsx)("span",{className:"navbar-toggler-icon"})}),Object(S.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(S.jsxs)("div",{className:"navbar-nav",children:[Object(S.jsxs)(j.b,{to:"/the-online-music-store/home",activeClassName:"text-info",className:"nav-item nav-link text-decoration-none",children:["Home ",Object(S.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(S.jsx)(j.b,{to:"/the-online-music-store/albums",activeClassName:"text-info",className:"nav-item nav-link text-decoration-none",children:"Albums"}),Object(S.jsxs)(j.b,{to:"/the-online-music-store/cart",activeClassName:"text-info",className:"nav-item nav-link text-decoration-none",children:["Cart",Object(S.jsx)("span",{className:"badge badge-pill badge-dark ml-1",children:this.state.totalCartItems})]}),Object(S.jsx)(j.b,{to:"/the-online-music-store/purchase",activeClassName:"text-info",className:"nav-item nav-link text-decoration-none",children:"Purchase"}),Object(S.jsx)("a",{className:"reset-btn nav-item nav-link text-decoration-none text-muted position-absolute mr-5",role:"button",onClick:function(){x.a.fire({title:"Reset Firestore Database?\nThese includes play, cart, and purchase counters.\n\nPage will reload shortly.",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Randomize",denyButtonText:"Clear"}).then((function(t){t.isConfirmed?(k(!0),x.a.fire({position:"center",icon:"success",title:"Reseting data with random values :)",showConfirmButton:!1,timer:1700}),setTimeout((function(){window.location.reload()}),2300)):t.isDenied&&(k(),x.a.fire({position:"center",icon:"success",title:"Clearing store data :)",showConfirmButton:!1,timer:1700}),setTimeout((function(){window.location.reload()}),2300))}))},children:"Reset Data"})]})})]}),Object(S.jsx)(m.b,{exact:!0,path:"/the-online-music-store/cart",children:Object(S.jsx)($,{cartData:this.state,albums:t})}),Object(S.jsx)(m.b,{exact:!0,path:"/the-online-music-store/purchase",children:Object(S.jsx)(W,{albums:t})}),Object(S.jsx)(m.b,{exact:!0,path:"/the-online-music-store/albums",children:Object(S.jsx)(U,{albums:t,isTopTen:!1,showButtons:!0,cartData:this.state})}),Object(S.jsx)(m.b,{exact:!0,path:"/the-online-music-store/home",children:Object(S.jsx)(R,{albums:t,isTopTen:!0,showButtons:!1})}),Object(S.jsx)(m.b,{exact:!0,path:"/the-online-music-store",children:Object(S.jsx)(m.a,{exact:!0,from:"/the-online-music-store",to:"/the-online-music-store/home"})}),Object(S.jsx)(m.b,{exact:!0,path:"/",children:Object(S.jsx)(m.a,{exact:!0,from:"/",to:"/the-online-music-store/"})})]})}}]),n}(c.a.Component),H=(n(54),function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){A().then((function(t){c(t)}))}),[]),Object(S.jsx)("div",{className:"App",children:!h.a.isEmpty(n)&&Object(S.jsx)(z,{albums:n})})}),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),s(t),o(t)}))};n(55),n(56);o.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(H,{})}),document.getElementById("root")),L()}},[[58,1,2]]]);
//# sourceMappingURL=main.de5e2e05.chunk.js.map