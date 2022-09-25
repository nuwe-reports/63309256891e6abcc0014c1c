import { useEffect, useState } from "react";
import axios from "axios";
import { Character } from "../types";

const INITIAL_STATE = [
  {
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
  },
];

const useFetchAllCharacters = (page: number) => {
  const [characters, setCharacters] = useState<Character[]>(INITIAL_STATE);
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

  return { characters, totalPages };
};

export default useFetchAllCharacters;
