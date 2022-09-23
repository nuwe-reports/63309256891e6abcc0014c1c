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
const useFetchCharacter = (id?: number) => {
  const [character, setCharacter] = useState<Character>({
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
  });

  useEffect(() => {
    async function fetchCharacter() {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id} `
      );
      setCharacter(response.data);
    }
    fetchCharacter();
  }, []);

  return { character };
};

export default useFetchCharacter;
