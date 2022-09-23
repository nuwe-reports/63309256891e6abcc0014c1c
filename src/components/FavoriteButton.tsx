import { StarIcon } from "@chakra-ui/icons";

interface Props {
    favorites: number[];
    id:number;
    handleFavoriteClick: (e: React.MouseEvent<SVGElement>, id: number) => void;
}

const FavoriteButton = ({favorites, id, handleFavoriteClick}:Props) => {
    return(
        <>
        {favorites.includes(id) ? (
            <StarIcon
              color="customBlue.50"
              onClick={(e) => handleFavoriteClick(e, id)}
            />
          ) : (
            <StarIcon
              color="transparent"
              stroke="customGreen.50"
              onClick={(e) => handleFavoriteClick(e,id)}
            />
          )}
          </>
    )
}

export default FavoriteButton