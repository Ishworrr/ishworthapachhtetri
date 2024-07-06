import {
  Center,
  Container,
  FormControl,
  FormLabel,
  Stack,
  Text,
  Input,
  Flex,
  Checkbox,
  Button,
  FormErrorMessage,
  HStack,
  Box,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import Card from "../../../components/Card";
import { useMutation } from "react-query";
import { signinUser } from "../../../api/query/userQuery";
import useAuth from "../../../hooks/useAuth";

const SignInValidationSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(6, "Password must be at leat 6 characters with symbols")
    .required("Password is required"),
  // confirmPassword: string().required("Confirm password is required"),
});

const SignIn = () => {
  const toast = useToast();
  const { login } = useAuth();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onSuccess: (data) => {
      const { token } = data;

      if (token) {
        login(token);
      }
    },
    onError: (error) => {
      toast({
        title: "Signin Error, bitch",
        description: error.message,
        status: "error",
        // duration:5000,
      });
    },
  });

  // if (isError) {
  //   return <Box>{error.message}</Box>;
  // }

  return (
    <Container bg={"white"}>
      <Center minHeight={"100vh"}>
        <Card>
          <Text fontWeight={"medium"} textStyle={"h1"}>
            Welcome to Crypto App
          </Text>
          <Text textStyle={"p2"} color={"black.60"} mt={4}>
            {" "}
            Enter your credentials to access the account.
          </Text>
          <Formik
            initialValues={{
              email: "inew101010@gmail.com",
              password: "123456",
            }}
            onSubmit={(values) => {
              // console.log(values);
              // mutate({
              //   email: "email.values",
              //   password: "password.values",
              // });
              mutate(values);
              console.log(values);
            }}
            validationSchema={SignInValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt={10} spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your Email...."
                        ></Input>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                          placeholder="Enter your Password...."
                        ></Input>
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <HStack justify={"space-between"}>
                    <Checkbox>
                      <Text textStyle={"p3"}>Remember me</Text>
                    </Checkbox>

                    <Link to="/forgot-password">
                      <Flex
                        as={"span"}
                        color={"rebeccapurple"}
                        textStyle={"p3"}
                        alignItems={"end"}
                      >
                        Forgot password?
                      </Flex>
                    </Link>
                  </HStack>

                  <Box>
                    <Button isLoading={isLoading} w={"full"} type="submit">
                      Log In
                    </Button>
                    <Link to={"/signup"}>
                      <Button mt={3} w={"full"} variant={"outline"}>
                        Create Account
                      </Button>
                    </Link>
                  </Box>

                  {/* <Text
                                                textStyle={"p3"}
                                                color={"black.60"}
                                                textAlign={"center"}
                                            >
                                                Already have an account?
                                                <Link to={"/signin"}>
                                                <Text as={"span"} color={"p.purple"}>
                                                    Log In
                                                </Text>
                                                </Link>
                                            </Text> */}
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default SignIn;
