import { StarIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";

interface Props {
  favorites: number[];
  id: number;
  handleFavoriteClick: (e: React.MouseEvent<SVGElement>, id: number) => void;
}

const FavoriteButton = ({ favorites, id, handleFavoriteClick }: Props) => {
  return (
    <Tooltip hasArrow label="Add to favorites" bg="customBlue.50" color="customGreen.200" border="1px" borderColor="customGreen.50">
      {favorites.includes(id) ? (
        <StarIcon
          color="customBlue.50"
          onClick={(e) => handleFavoriteClick(e, id)}
        />
      ) : (
        <StarIcon
          color="transparent"
          stroke="customGreen.50"
          onClick={(e) => handleFavoriteClick(e, id)}
        />
      )}
    </Tooltip>
  );
};

export default FavoriteButton;
