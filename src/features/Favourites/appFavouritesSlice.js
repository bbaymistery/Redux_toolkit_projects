import { createSlice } from "@reduxjs/toolkit";

const getFavouritesFromLs = () => {
  let favouriteLS = [];
  if (localStorage.getItem("favouriteLS") === null) {
    favouriteLS = []; //yukarda tanimlanan itemsin dizi haline cevirilmesi
  } else {
    favouriteLS = JSON.parse(localStorage.getItem("favouriteLS"));
    //json.parse donusdurdugumuz elemani alinmasi icin kullaniliyordu
  }
  return favouriteLS;
};
const getIDsFromLs = () => {
  let addedItemsIdsLS = [];
  if (localStorage.getItem("addedItemsIdsLS") === null) {
    addedItemsIdsLS = [];
  } else {
    addedItemsIdsLS = JSON.parse(localStorage.getItem("addedItemsIdsLS"));
  }
  return addedItemsIdsLS;
};

export const appFavouritesSlice = createSlice({
  name: "favouriteSlice",
  initialState: {
    favouritesItems: getFavouritesFromLs(),
    addedItemsIds: getIDsFromLs(),
    alert: false,
    message: "",
    alertClassName: "",
  },
  reducers: {
    addItemToFavourites: (state, { payload: itemToBeAdded }) => {
      state.favouritesItems.push(itemToBeAdded);
      state.addedItemsIds.push(itemToBeAdded.id);
      localStorage.setItem(
        "favouriteLS",
        JSON.stringify(state.favouritesItems)
      );
      localStorage.setItem(
        "addedItemsIdsLS",
        JSON.stringify(state.addedItemsIds)
      );
    },
    removeItemFromFavourites: (state, { payload: data }) => {
      const newItems = state.favouritesItems.filter(
        (item) => item.id !== data.id
      );
      const newAddedItemsIds = state.addedItemsIds.filter(
        (id) => id !== data.id
      );
      state.favouritesItems = newItems;
      state.addedItemsIds = newAddedItemsIds;
      localStorage.setItem("favouriteLS", JSON.stringify(newItems));
      localStorage.setItem("addedItemsIdsLS", JSON.stringify(newAddedItemsIds));
      // }
    },
    clearAllitems: (state, action) => {
      let items = [];
      state.favouritesItems = items;
      state.addedItemsIds = items;
      localStorage.setItem("favouriteLS", JSON.stringify(items));
      localStorage.setItem("addedItemsIdsLS", JSON.stringify(items));
    },
    setAlert: (state, action) => {
      console.log(action);

      state.alert = action.payload.alert;
      state.message = action.payload.message;
      state.alertClassName = action.payload.className;
    },
  },
});

export const {
  addItemToFavourites,
  removeItemFromFavourites,
  clearAllitems,
  setAlert,
} = appFavouritesSlice.actions;

export default appFavouritesSlice.reducer;
//komple silmek
// let favouriteLS = getFavouritesFromLs();
// favouriteLS = favouriteLS.filter((item) => item.id !== data.id);

// //id lerden silme
// if (localStorage.getItem("addedItemsIdsLS")) {
//   let items = JSON.parse(localStorage.getItem("addedItemsIdsLS"));
//   console.log(items);

//   // items = items.filter((id) => id !== data.id);
