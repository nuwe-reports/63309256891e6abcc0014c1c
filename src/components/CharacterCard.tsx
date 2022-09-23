import { Text, Image, VStack, WrapItem, HStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface Props {
  character: any;
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
          {favorites.includes(character.id) ? (
            <StarIcon
              color="customBlue.50"
              onClick={(e) => handleFavoriteClick(e, character.id)}
            />
          ) : (
            <StarIcon
              color="transparent"
              stroke="customGreen.50"
              onClick={(e) => handleFavoriteClick(e, character.id)}
            />
          )}
        </HStack>
      </VStack>
    </WrapItem>
  );
};

export default CharacterCard;
