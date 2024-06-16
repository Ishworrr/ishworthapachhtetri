import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
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

const signupValidationSchema = object({
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

const SignUp = () => {
  return (
    <Container>
      <Center minHeight={"100vh"}>
        {/* <Card p={6} borderRadius={"1rem"} maxW={"456px"}> */}
        <Card>
          <Text fontWeight={"medium"} textStyle={"h1"}>
            Welcome to Crypto App
          </Text>
          <Text textStyle={"p2"} color={"black.60"} mt={4}>
            {" "}
            Create a free account by filling the data below
          </Text>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatpassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signupValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt={10} spacing={6}>
                  <Flex gap={4}>
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input
                            {...field}
                            name="name"
                            placeholder="Enter your name...."
                          ></Input>
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="surname">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="surname">Surname</FormLabel>
                          <Input
                            {...field}
                            name="surname"
                            placeholder="Enter your surname...."
                          ></Input>
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

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
                  <Field name="repeatpassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="repeatpassword">
                          Repeat Password
                        </FormLabel>
                        <Input
                          {...field}
                          name="repeatpassword"
                          type="password"
                          placeholder="Repeat Password"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Checkbox>
                    <Text textStyle={"p3"}>
                      I agree with{" "}
                      <Text as={"span"} color={"p.purple"}>
                        Terms and Conditions
                      </Text>
                    </Text>
                  </Checkbox>

                  <Button type="submit">Create Account</Button>
                  <Text
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
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default SignUp;
