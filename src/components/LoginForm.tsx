import React, { useEffect, useRef } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { toggleColorMode } = useColorMode();
  const rickPortalRef = useRef(null);
  const mortyPortalRef = useRef(null);
  const rickRef = useRef(null);
  const mortyRef = useRef(null);

  const formBackground = useColorModeValue("gray.100", "gray.700");
  const navigate = useNavigate();
  const loginHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate("/characters");
  };
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
      <Flex
        flexDirection="column"
        // bg={formBackground}
        p={{ base: 6, md: 12 }}
        borderRadius={8}
        border="2px"
        borderColor= "customGreen.50"
        boxShadow="lg"
        position="relative"
        bg="customGreen.100"
      >
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

        <Heading mb={6} color="customGreen.50">
          Log In
        </Heading>
        <Input placeholder="Rick" type="email" variant="filled" mb={3} color="customGreen.50"/>
        {/* <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        /> */}
        <Button
          bg="customBlue.50"
          color="customGreen.200"
          mb={8}
          onClick={(e: React.MouseEvent<HTMLElement>) => loginHandler(e)}
        >
          Log In
        </Button>
        {/* <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" color="#c1e26a" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl> */}
      </Flex>
    </Flex>
  );
};

export default LoginForm;
