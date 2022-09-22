import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const CharactersPage = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  console.log("hOLA")
  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      console.log("🚀 ~ file: CharactersPaje.tsx ~ line 13 ~ fetchCharacters ~ response", response)
      setCharacters(response.data.results);
    }
    fetchCharacters();
  }, []);
  return (
    <Box bg="black" w="100vw" h="100vh">
      <Heading mb={6} color="#c1e26a">
        CharactersPage
      </Heading>
      {characters.map((character, index) => {
        return (
          <Text key={index} color="#c1e26a">
            {character.name}
          </Text>
        );
      })}
    </Box>
  );
};

export default CharactersPage;
