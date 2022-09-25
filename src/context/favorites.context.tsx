import React, {
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Character, FavoriteContext } from "../types";

interface Props {
  children: ReactNode;
}

export const FavoritesContext = React.createContext<FavoriteContext | null>(
  null
);

const FavoritesWrapper = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Character[]>(() => {
    const favoritesList = localStorage.getItem("favorites");
    if (favoritesList) return JSON.parse(favoritesList);
    else return [];
  });

  const toggleFavorite = (
    e: React.MouseEvent<SVGElement>,
    character: Character
  ) => {
    e.stopPropagation();
    const isFavorite = favorites.find(
      (char: Character) => char.id === character.id
    );
    const favoritesList = localStorage.getItem("favorites");
    if (isFavorite)
      setFavorites(favorites.filter((char: any) => char.id !== character.id));
    else if (favoritesList)
      setFavorites([...JSON.parse(favoritesList), character]);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, setFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesWrapper;
