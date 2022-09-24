import { Box, Text, HStack, Tooltip } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <Box
      bg="customGreen.100"
      w="full"
      py={2}
      borderBottom="1px"
      borderColor="customGreen.50"
    >
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
    </Box>
  );
};

export default Header;
