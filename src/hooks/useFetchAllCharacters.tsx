import { useEffect, useState } from "react";
import axios from "axios";

interface  Character {
  created:string;
  episode: string[];
  gender: string;
  id:number;
  image: string;
  location: {
    name:string;
    url:string;
  };
  name:string;
  origin: {
    name:string;
    url:string;
  };
  species:string;
  status:string;
  type:string;
  url:string;
}

const useFetchAllCharacters = (page?: string) => {
  const [characters, setCharacters] = useState<Character[]>([{
    created:"",
    episode: [""],
    gender: "",
    id:0,
    image: "",
    location: {
      name:"",
      url:"",
    },
    name:"",
    origin: {
      name:"",
      url:"",
    },
    species:"",
    status:"",
    type:"",
    url:"",
  }]);
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

export default useFetchAllCharacters;
