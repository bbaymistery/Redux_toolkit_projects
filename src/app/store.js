import { configureStore } from "@reduxjs/toolkit";
import appNavbarSliceReducer from "../features/LeftNavbar/appNavbarSlice";
import appFavouritesReducer from "../features/Favourites/appFavouritesSlice";
//
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
export const store = configureStore({
  reducer: {
    appNavbar: appNavbarSliceReducer,
    appFavourites: appFavouritesReducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
