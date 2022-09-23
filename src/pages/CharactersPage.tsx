import {
  Box,
  Heading,
  Wrap,
  useDisclosure,
} from "@chakra-ui/react";
import PageButtons from "../components/PageButtons";

import { useEffect, useState } from "react";
import axios from "axios";
import Fonts from "../Fonts";
import { useParams } from "react-router-dom";
import CharacterModal from "../components/CharacterModal";
import CharacterCard from "../components/CharacterCard";
import useFetchCharacters from "../hooks/useFetchCharacters";
const CharactersPage = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [id, setId] = useState<number | null>(null);
  const { page } = useParams();
  const {characters, totalPages} = useFetchCharacters(page)
  const handleCardCLick = (id: number) => {
    setId(id);
    onOpen();
  };

  const handleFavoriteClick = (e: React.MouseEvent<SVGElement>, id: number) => {
    e.stopPropagation();
    const index = favorites.indexOf(id);
    if (id && index === -1) {
      setFavorites([...favorites, id]);
    } else if (id && index !== -1) {
      setFavorites(favorites.filter((item) => item !== id));
    }
  };


  return (
    <Box
      bg="customGreen.200"
      max-w="100vw"
      h="fit-content"
      px={{ base: 8, xl: 160 }}
    >
      <Fonts />
      <Heading
        color="customBlue.50"
        fontSize={{ base: 60, md: 120 }}
        textShadow="2.5px 0 #c1e26a, -2.5px 0 #c1e26a, 0 2.5px #c1e26a, 0 -2.5px #c1e26a"
        pt={10}
      >
        CHARACTERS
      </Heading>
      <PageButtons totalPages={totalPages}></PageButtons>
      <Wrap spacing={{ base: 8, lg: 20 }} pt={18} justify="center">
        {characters.map((character, index) => {
          return (
            <CharacterCard
              key={index}
              character={character}
              favorites={favorites}
              handleCardCLick={handleCardCLick}
              handleFavoriteClick={handleFavoriteClick}
            />
          );
        })}
      </Wrap>
      S
      {isOpen && (
        <CharacterModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          id={id}
          favorites={favorites}
          handleFavoriteClick={handleFavoriteClick}
        />
      )}
      <PageButtons totalPages={totalPages}></PageButtons>
    </Box>
  );
};

export default CharactersPage;
