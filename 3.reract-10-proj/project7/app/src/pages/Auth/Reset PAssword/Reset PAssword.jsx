import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Card from "../../../components/Card";
import { object, string, ref } from "yup";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ResetValidationSchema = object({
  password: string()
    .min(6, "Password must be at leat 6 characters with symbols")
    .required("Password is required"),

  repeatpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat and Confirm Password"),
});
const ResetPassword = () => {
  return (
    <Container>
      <Center minH={"100vh"}>
        <Card>
          <Link to={"/forgot-password"}>
            <Icon as={AiOutlineArrowLeft} boxSize={6} />
          </Link>
          <Text mt={4} fontWeight={"medium"} textStyle={"h1"}>
            Reset Password
          </Text>
          <Text textStyle={"p2"} color={"black.60"} mt={4}>
            {" "}
            Enter your email address for which account you want to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatpassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={ResetValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt={8} spacing={6}>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">New Password</FormLabel>
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
                          New Repeat Password
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

                  <Box>
                    {/* <Button w={"full"} type="submit"></Button> */}
                    <Link to={"/ResetPassword"}>
                      <Button mt={3} w={"full"}>
                        Reset password
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

    // <Box as='b' color={'p.black'}></Box>
  );
};

export default ResetPassword;
