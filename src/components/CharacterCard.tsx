import { Text, Image, VStack, WrapItem, HStack } from "@chakra-ui/react";
import FavoriteButton from "../components/FavoriteButton";
import {Character} from "../types"

interface Props {
  character: Character;
  handleCardCLick: (character: Character) => void;
}
const CharacterCard = ({
  character,
  handleCardCLick,
}: Props) => {
  return (
    <WrapItem
      border="2px"
      borderColor="customGreen.50"
      bg="customGreen.100"
      p={4}
      onClick={() => handleCardCLick(character)}
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
          <FavoriteButton
            character={character}
          />
        </HStack>
      </VStack>
    </WrapItem>
  );
};

export default CharacterCard;
