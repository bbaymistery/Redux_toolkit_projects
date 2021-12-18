export const selectFavouritesItems = ({ appFavourites }) =>
  appFavourites.favouritesItems;
export const selectAddedItemsIds = ({ appFavourites }) =>
  appFavourites.addedItemsIds;
export const selectAlert = ({ appFavourites }) => appFavourites.alert;
export const selectMessage = ({ appFavourites }) => appFavourites.message;
export const selectClassName = ({ appFavourites }) =>
  appFavourites.alertClassName;
