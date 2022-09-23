import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCharacters = (page?: string) => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
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

  return {characters, totalPages};
};

export default useFetchCharacters;
