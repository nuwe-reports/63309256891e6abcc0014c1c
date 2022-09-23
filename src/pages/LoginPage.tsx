import LoginForm from "../components/LoginForm";
import { Box, Flex } from "@chakra-ui/react";
import LoginAnimation from "../components/LoginAnimation";
const LoginPage = () => {
  return (
    <Flex
      height="100vh"
      w="100vw"
      bg="customGreen.200"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <LoginForm />
        <LoginAnimation />
      </Box>
    </Flex>
  );
};

export default LoginPage;
