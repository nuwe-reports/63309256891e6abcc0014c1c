import { StarIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";

interface Props {
  favorites: number[];
  id: number;
  handleFavoriteClick: (e: React.MouseEvent<SVGElement>, id: number) => void;
}

const FavoriteButton = ({ favorites, id, handleFavoriteClick }: Props) => {
  return (
    <>
      {favorites.includes(id) ? (
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
            onClick={(e) => handleFavoriteClick(e, id)}
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
            onClick={(e) => handleFavoriteClick(e, id)}
          />
        </Tooltip>
      )}
    </>
  );
};

export default FavoriteButton;
