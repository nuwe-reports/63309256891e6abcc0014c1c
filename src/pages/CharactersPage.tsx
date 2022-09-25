import { Box, Image, Wrap, useDisclosure, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CharacterModal from "../components/CharacterModal";
import CharacterCard from "../components/CharacterCard";
import PageButtons from "../components/PageButtons";
import useFetchAllCharacters from "../hooks/useFetchAllCharacters";
import { Character } from "../types";
import Header from "../components/Header";
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

const CharactersPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { page } = useParams();
  const { characters, totalPages } = useFetchAllCharacters(page);

  const [character, setCharacter] = useState<Character>(INITIAL_STATE);

  const handleCardCLick = (character: Character) => {
    setCharacter(character);
    onOpen();
  };

  return (
    <VStack gap={0} bg="customGreen.200">
      <Header />
      <Box max-w="100vw" h="fit-content" px={{ base: 8, xl: 160 }}>
        <Image
          src="/characters.png"
          alt="Characters"
          w={{ base: "sm", md: "md" }}
          m="auto"
          pt={10}
          filter="drop-shadow(2px 0 0 #c1e26a) drop-shadow(0 2px 0 #c1e26a) drop-shadow(-2px 0 0 #c1e26a) drop-shadow(0 2px 0 #c1e26a)  "
        />
        <PageButtons totalPages={totalPages} />
        <Wrap spacing={{ base: 8, lg: 20 }} pt={18} justify="center">
          {characters.map((character, index) => {
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
        <PageButtons totalPages={totalPages} />
      </Box>
    </VStack>
  );
};

export default CharactersPage;
