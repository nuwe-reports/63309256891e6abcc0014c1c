import {
  Heading,
  Input,
  Button,
  FormControl,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";

const LoginForm = () => {
  const navigate = useNavigate();

  const loginHandler = (username: string) => {
    localStorage.setItem("username", username);
    navigate("/characters/1");
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
              Login
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
                color="customGreen.100"
                bg="customGreen.50"
                borderColor="customBlue.50"
                placeholder="Username"
                _focus={{
                  borderColor: "customGreen.50",
                  color: "customGreen.50",
                  bg: "transparent",
                }}
                _hover={{
                  borderColor: "customGreen.50",
                  color: "customGreen.50",
                  bg: "transparent",
                }}
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
              _hover={{ bg: "customGreen.50", borderColor: "customGreen.50" }}
            >
              Log In
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
