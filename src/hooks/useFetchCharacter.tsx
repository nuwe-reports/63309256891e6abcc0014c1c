import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCharacter = (id?: number) => {
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

  return { character };
};

export default useFetchCharacter;
