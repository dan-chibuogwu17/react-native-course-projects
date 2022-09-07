import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  function addFavorite(id) {
    setFavoriteMealIds((prevFavIds) => [...prevFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteMealIds((prevFavIds) => {
      return prevFavIds.filter((mealId) => mealId !== id);
    });
  }
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
