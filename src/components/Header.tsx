import { Box, Text, HStack, Tooltip, Link } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate, Link as ReachLink } from "react-router-dom";
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
      <HStack>
        <HStack>
          <Link as={ReachLink} to="/characters/1" color="customGreen.50">CHARACTERS</Link>
          <Link as={ReachLink} to="/favorites" color="customGreen.50">FAVORITES </Link>
        </HStack>

        <HStack justify="center">
          <Text color="customGreen.50" fontSize="2xl">
            Logged in as{" "}
            <Text as="span" color="customBlue.50" fontWeight="bold">
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
                w={5}
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
