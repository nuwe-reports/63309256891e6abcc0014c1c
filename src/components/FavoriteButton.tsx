import { StarIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import { Character, FavoriteContext } from "../types";
import {FavoritesContext} from "../context/favorites.context"
import { useContext } from "react";
interface Props {
  character: Character;
}

const FavoriteButton = ({ character }: Props) => {
  const {favorites, toggleFavorite} = useContext(FavoritesContext) as FavoriteContext
  return (
    <>
      {favorites.find((char:Character) => char.id === character.id) ? (
        <Tooltip
          hasArrow
          label="Remove from favorites"
          bg="customBlue.50"
          color="customGreen.200"
          border="1px"
          borderColor="customGreen.50"
          borderRadius="4px"
        >
          <StarIcon
            color="customBlue.50"
            onClick={(e) => toggleFavorite(e, character)}
          />
        </Tooltip>
      ) : (
        <Tooltip
          hasArrow
          label="Add to favorites"
          bg="customBlue.50"
          color="customGreen.200"
          border="1px"
          borderColor="customGreen.50"
        >
          <StarIcon
            color="transparent"
            stroke="customGreen.50"
            onClick={(e) => toggleFavorite(e, character)}
          />
        </Tooltip>
      )}
    </>
  );
};

export default FavoriteButton;
