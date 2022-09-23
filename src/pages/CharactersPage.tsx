import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import PageButtons from "../components/Pagination";

import { useEffect, useState } from "react";
import axios from "axios";
import Fonts from "../Fonts";
import { useParams } from "react-router-dom";
import CharacterModal from "../components/CharacterModal";
const CharactersPage = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState<number | null>(null);
  const { page } = useParams();

  const handleCLick = (id: number) => {
    setId(id);
    onOpen();
  };

  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    }
    fetchCharacters();
  }, [page]);

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
            <WrapItem
              border="2px"
              borderColor="customGreen.50"
              bg="customGreen.100"
              p={4}
              onClick={() => handleCLick(character.id)}
              cursor={"pointer"}
              _hover={{ opacity: 0.8 }}
            >
              <VStack key={index}>
                <Image
                  src={character.image}
                  alt={character.name + "Image"}
                  maxW={64}
                />
                <Text color="customGreen.50">
                  {character.name.toUpperCase()}
                </Text>
              </VStack>
            </WrapItem>
          );
        })}
      </Wrap>
      {isOpen && (
        <CharacterModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          id={id}
        />
      )}
      <PageButtons totalPages={totalPages}></PageButtons>

    </Box>

  );
};

export default CharactersPage;
