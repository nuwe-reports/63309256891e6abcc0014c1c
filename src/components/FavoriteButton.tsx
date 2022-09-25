import { StarIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import useFavorites from "../hooks/useFavorites";
import { Character } from "../types";

interface Props {
  character: Character;
}

const FavoriteButton = ({ character }: Props) => {
  const [favorites, toggleFavorite] = useFavorites();
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
