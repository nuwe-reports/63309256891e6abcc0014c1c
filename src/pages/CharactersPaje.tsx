import { Box, Heading, Text, Image, VStack, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Fonts from "../Fonts";
const CharactersPage = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  console.log("hOLA");
  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      console.log(
        "🚀 ~ file: CharactersPaje.tsx ~ line 13 ~ fetchCharacters ~ response",
        response
      );
      setCharacters(response.data.results);
    }
    fetchCharacters();
  }, []);
  return (
    <Box bg="customGreen.200" max-w="100vw" h="fit-content">
      <Fonts />

      <Heading
        color="customBlue.50"
        fontSize={{base:60, md:120}}
        textShadow="2.5px 0 #c1e26a, -2.5px 0 #c1e26a, 0 2.5px #c1e26a, 0 -2.5px #c1e26a"
        pt={10}
      >
        CHARACTERS
      </Heading>

      <Wrap spacing={{base:8, lg:24}} px={{base:8, xl:160}} pt={18} justify="center">
        {characters.map((character, index) => {
          return (
            <WrapItem>
            <VStack key={index}>
              <Image src={character.image} alt={character.name + "Image"} maxW={64}/>
              <Text color="#c1e26a">{character.name}</Text>
            </VStack>
            </WrapItem>
          );
        })}
      </Wrap>

    </Box>
  );
};

export default CharactersPage;
