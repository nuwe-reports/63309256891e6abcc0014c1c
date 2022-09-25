import { Box, Image } from "@chakra-ui/react";
import useGsap from "../hooks/useLoginGsap";

const LoginAnimation = () => {
  const { rickPortalRef, mortyPortalRef, rickRef, mortyRef } = useGsap();

  return (
    <Box position="relative">
      <Image
        src="./Rick-and-Morty.png"
        position="absolute"
        bottom={200}
        right={0}
      />

      <Image
        src="/portal-2.gif"
        position="absolute"
        bottom={0}
        right={-300}
        css={{ transform: "rotate(180deg)" }}
        ref={rickPortalRef}
        display={{ base: "none", md: "block" }}
      />
      <Image
        src="/rick.png"
        position="absolute"
        bottom={0}
        right={-130}
        height={300}
        width="auto"
        ref={rickRef}
        display={{ base: "none", md: "block" }}
      />
      <Image
        src="/portal-2.gif"
        position="absolute"
        bottom={0}
        left={-300}
        ref={mortyPortalRef}
        display={{ base: "none", md: "block" }}
      />
      <Image
        src="/morty.png"
        position="absolute"
        bottom={0}
        left={-200}
        height={220}
        width="auto"
        ref={mortyRef}
        display={{ base: "none", md: "block" }}
      />
    </Box>
  );
};

export default LoginAnimation;
