import { Text, Image, VStack, WrapItem, HStack } from "@chakra-ui/react";
import FavoriteButton from "../components/FavoriteButton"
interface  Character {
  created:string;
  episode: string[];
  gender: string;
  id:number;
  image: string;
  location: {
    name:string;
    url:string;
  };
  name:string;
  origin: {
    name:string;
    url:string;
  };
  species:string;
  status:string;
  type:string;
  url:string;
}
interface Props {
  character: Character;
  favorites: number[];
  handleCardCLick: (id: number) => void;
  handleFavoriteClick: (e: React.MouseEvent<SVGElement>, id: number) => void;
}
const CharacterCard = ({
  character,
  favorites,
  handleCardCLick,
  handleFavoriteClick,
}: Props) => {
  return (
    <WrapItem
      border="2px"
      borderColor="customGreen.50"
      bg="customGreen.100"
      p={4}
      onClick={() => handleCardCLick(character.id)}
      cursor={"pointer"}
      borderRadius="8px"
      _hover={{ opacity: 0.8 }}
    >
      <VStack>
        <Image
          src={character.image}
          alt={character.name + "Image"}
          maxW={64}
          borderRadius="8px"
        />
        <HStack>
          <Text color="customGreen.50">{character.name.toUpperCase()}</Text>
          <FavoriteButton favorites={favorites} id={character.id} handleFavoriteClick={handleFavoriteClick}/>
        </HStack>
      </VStack>
    </WrapItem>
  );
};

export default CharacterCard;
