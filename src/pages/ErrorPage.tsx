import { Image, Flex, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
const navigate = useNavigate();

  return (
    <Flex
      height="100vh"
      w="100vw"
      bg="customGreen.200"
      alignItems="center"
      justifyContent="center"
    >
      <VStack border="2px" borderColor="customGreen.50" p={8} bg="customGreen.100" borderRadius="8px" m={4}>
        <Image src="/404-Image.png" alt="404 Image" w={96} />
        <Text fontSize={{base:"2xl", md:"4xl"}} fontWeight="bold" color="red">
          404 - Page not found
        </Text>
        <Text fontSize={{base:"2xl", md:"4xl"}} fontWeight="bold" color="customGreen.50">
          Look Morty! A lost traveler!
        </Text>
        <Text fontSize={{base:"md", md:"xl"}} fontWeight="bold" color="customGreen.50">
          Hurry up! Enter the portal to go back home!
        </Text>
        <Image
        src="/portal-2.gif"
        w={32}
        bottom={0}
        left={-300}
        onClick={()=>navigate("/")}
        cursor="pointer"
      />
      </VStack>
    </Flex>
  );
};

export default ErrorPage;
