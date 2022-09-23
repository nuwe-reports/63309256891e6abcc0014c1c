import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Button,
  Text,
  HStack,
  Box,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  id: number | null;
}

function CharacterModal({ isOpen, onOpen, onClose, id }: Props) {
  const [character, setCharacter] = useState<any>({});
  useEffect(() => {
    async function fetchCharacter() {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id} `
      );
      console.log(
        "🚀 ~ file: CharacterModal.tsx ~ line 30 ~ fetchCharacter ~ response",
        response.data
      );
      setCharacter(response.data);
    }
    fetchCharacter();
  }, []);
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl" >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          bg="customGreen.100"
          color="customGreen.50"
          border="2px"
          borderColor="customGreen.50"
          
        >
          <ModalCloseButton />
          <ModalBody pt={12} px={12}>
            <HStack align="flex-start">
              <Image
                src={character.image}
                alt={character.name + "Image"}
                maxW={44}
                borderRadius={4}
              />
              <Box pl={4}>
                <ModalHeader pt={0} pl={0}>{character.name}</ModalHeader>
                <Text>
                  {character.status} {character.gender} {character.species}
                </Text>
                <Text>{character.origin?.name}</Text>

                <Text>{character.location?.name}</Text>
              </Box>
            </HStack>
          </ModalBody>
          <ModalFooter pt={0}>
            <Button color="customGreen.100" bg="customGreen.50" _hover={{ bg: "customGreen.100", borderColor: "customGreen.50", color:"customGreen.50"}} onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CharacterModal;
