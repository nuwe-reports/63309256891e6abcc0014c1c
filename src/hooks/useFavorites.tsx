import { useEffect, useState } from "react";
import { Character } from "../types";

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
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
    console.log(
      "🚀 ~ file: useFavorites.tsx ~ line 24 ~ useEffect ~ favorites",
      favorites
    );
  }, [favorites]);

  return [favorites, toggleFavorite];
};

export default useFavorites;
