import LoginForm from "../components/LoginForm";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Flex, Image } from "@chakra-ui/react";
import gsap from "gsap";

const LoginPage = () => {
  const rickPortalRef = useRef(null);
  const mortyPortalRef = useRef(null);
  const rickRef = useRef(null);
  const mortyRef = useRef(null);
  useEffect(() => {
    const rickTimeLine = gsap.timeline();
    const mortyTimeLine = gsap.timeline();

    rickTimeLine
      .fromTo(
        rickPortalRef.current,
        { transform: "Scale(0)", opacity: 0 },
        { transform: "Scale(1)", opacity: 1, duration: 3, ease: "back" }
      )
      .fromTo(
        rickRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.8"
      )
      .to(rickPortalRef.current, {
        transform: "Scale(0)",
        opacity: 1,
        duration: 2,
      });

    mortyTimeLine
      .fromTo(
        mortyPortalRef.current,
        { transform: "Scale(0)", opacity: 0 },
        { transform: "Scale(1)", opacity: 1, duration: 3, ease: "back" }
      )
      .fromTo(
        mortyRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.8"
      )
      .to(mortyPortalRef.current, {
        transform: "Scale(0)",
        opacity: 1,
        duration: 2,
      });
  }, []);
  return (
    <Flex
      height="100vh"
      w="100vw"
      bg="customGreen.200"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="relative">
        <LoginForm />

        <Image
          src="./Rick-and-Morty.png"
          position="absolute"
          top={-24}
          right={0}
        />

        <Image
          src="./portal-2.gif"
          position="absolute"
          bottom={0}
          right={-300}
          css={{ transform: "rotate(180deg)" }}
          ref={rickPortalRef}
          visibility={{ base: "hidden", md: "visible" }}
        />
        <Image
          src="./rick.png"
          position="absolute"
          bottom={0}
          right={-130}
          height={300}
          width="auto"
          ref={rickRef}
          visibility={{ base: "hidden", md: "visible" }}
        />
        <Image
          src="./portal-2.gif"
          position="absolute"
          bottom={0}
          left={-300}
          ref={mortyPortalRef}
          visibility={{ base: "hidden", md: "visible" }}
        />
        <Image
          src="./morty.png"
          position="absolute"
          bottom={0}
          left={-200}
          height={220}
          width="auto"
          ref={mortyRef}
          visibility={{ base: "hidden", md: "visible" }}
        />
      </Box>
    </Flex>
  );
};

export default LoginPage;
