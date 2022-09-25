import { Box, Text, HStack, Tooltip, Link } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate, NavLink} from "react-router-dom";
import { FavoriteContext } from "../types";
import { FavoritesContext } from "../context/favorites.context";
import { useContext } from "react";

const Header = () => {
  const username = localStorage.getItem("username");
  const { setFavorites } = useContext(FavoritesContext) as FavoriteContext;
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("favorites");
    navigate("/");
    setFavorites([]);
  };

  return (
    <Box
      bg="customGreen.100"
      w="full"
      py={2}
      borderBottom="1px"
      borderColor="customGreen.50"
    >
      <HStack  justify={{base:"center", md:"end"}} px={{base:1,md:16}} gap={{base:4,md:8}}>
        <HStack fontSize={{base:"sm", md:"xl"}} gap={{base:2,md:4}}>
          <Link as={NavLink} to="/characters" color="customGreen.50" _activeLink={{color:"customBlue.50"}} _hover={{color:"customBlue.50"}}>CHARACTERS</Link>
          <Link as={NavLink} to="/favorites" color="customGreen.50" _activeLink={{color:"customBlue.50"}} _hover={{color:"customBlue.50"}}>FAVORITES </Link>
        </HStack>

        <HStack>
          <Text color="customGreen.50" fontSize={{base:"sm", md:"xl"}}>
            Logged in as{" "}
            <Text as="span" color="customBlue.50" fontWeight="bold" textDecoration="underline">
              {username}
            </Text>
          </Text>
          <Tooltip
            hasArrow
            label="Logout"
            bg="customBlue.50"
            color="customGreen.200"
            border="1px"
            borderColor="customGreen.50"
            borderRadius="4px"
          >
            <Box>
              <CloseIcon
                color="customGreen.50"
                w={{base:3, md:5}}
                cursor="pointer"
                onClick={() => handleClick()}
              />
            </Box>
          </Tooltip>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
