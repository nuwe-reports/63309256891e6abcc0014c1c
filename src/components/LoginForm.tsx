import {
  Heading,
  Input,
  Button,
  FormControl,
  useColorMode,
  useColorModeValue,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

interface loginState {
  isLoggedIn: boolean;
  logInUser: (username: string) => void;
  logOutUser: (username: string) => void;
}

const LoginForm = () => {
  const { toggleColorMode } = useColorMode();
  const { logInUser } = useContext(AuthContext) as loginState;

  const formBackground = useColorModeValue("gray.100", "gray.700");
  const navigate = useNavigate();
  const loginHandler = ( username:string) => {
    logInUser(username)
    navigate("/characters");
  };


  return (
    <Formik
      initialValues={{ username: "" }}
      onSubmit={(values) => loginHandler(values.username)}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack
            spacing={4}
            p={{ base: 6, md: 12 }}
            borderRadius={8}
            border="2px"
            borderColor="customGreen.50"
            boxShadow="lg"
            position="relative"
            bg="customGreen.100"
          >
            <Heading mb={6} color="customGreen.50">
              Log In
            </Heading>
            <FormControl isInvalid={!!errors.username && touched.username}>
              <Field
                as={Input}
                id="username"
                name="username"
                type="text"
                variant="filled"
                mb={3}
                width={60}
                color="customGreen.50"
                validate={(value: string) => {
                  if (!value) {
                    return "Username is required";
                  }
                }}
              />
              <FormErrorMessage position="absolute" bottom={-2}>
                {errors.username}
              </FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              bg="customBlue.50"
              color="customGreen.200"
              mb={8}
              width={60}
            >
              Log In
            </Button>
          </VStack>
        </form>
      )}

      {/* <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        /> */}

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
    </Formik>
  );
};

export default LoginForm;
