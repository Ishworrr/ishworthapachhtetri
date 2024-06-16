import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import { useState } from "react";
import Card from "../../../components/Card";

const SignInValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required(" Required Surname, as in passport"),
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(6, "Password must be at leat 6 characters with symbols")
    .required("Password is required"),
  // confirmPassword: string().required("Confirm password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat and Confirm Password"),
});

const SignIn = () => {
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
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
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
                    <Button w={"full"} type="submit">
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
