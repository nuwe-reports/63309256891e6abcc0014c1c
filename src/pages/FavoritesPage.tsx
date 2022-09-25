import { Box, Image, Wrap, useDisclosure, VStack } from "@chakra-ui/react";
import { useState, useContext } from "react";
import CharacterModal from "../components/CharacterModal";
import CharacterCard from "../components/CharacterCard";
import { Character, FavoriteContext } from "../types";
import Header from "../components/Header";
import { FavoritesContext } from "../context/favorites.context";
const INITIAL_STATE = {
  created: "",
  episode: [""],
  gender: "",
  id: 0,
  image: "",
  location: {
    name: "",
    url: "",
  },
  name: "",
  origin: {
    name: "",
    url: "",
  },
  species: "",
  status: "",
  type: "",
  url: "",
};

const FavoritesPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { favorites } = useContext(FavoritesContext) as FavoriteContext;

  const [character, setCharacter] = useState<Character>(INITIAL_STATE);

  const handleCardCLick = (character: Character) => {
    setCharacter(character);
    onOpen();
  };

  return (
    <VStack gap={0} bg="customGreen.200" w="100vw" h="100vh">
      <Header />
      <Box max-w="100vw" h="fit-content" px={{ base: 8, xl: 160 }}>
        <Image
          src="/favorites.png"
          alt="Favorites"
          w={{ base: "sm", md: "md" }}
          m="auto"
          pt={10}
          filter="drop-shadow(2px 0 0 #c1e26a) drop-shadow(0 2px 0 #c1e26a) drop-shadow(-2px 0 0 #c1e26a) drop-shadow(0 2px 0 #c1e26a)  "
        />
        <Wrap spacing={{ base: 8, lg: 20 }} pt={18} justify="center">
          {favorites.map((character: Character, index: number) => {
            return (
              <CharacterCard
                key={index}
                character={character}
                handleCardCLick={handleCardCLick}
              />
            );
          })}
        </Wrap>
        {isOpen && (
          <CharacterModal
            isOpen={isOpen}
            onClose={onClose}
            character={character}
          />
        )}
      </Box>
    </VStack>
  );
};

export default FavoritesPage;
