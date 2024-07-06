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
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import Card from "../../../components/Card";
import { object, string, ref } from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { verifyForgotToken } from "../../../api/query/userQuery";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useMutation } from "react-query";

const resetValidationSchema = object({
  password: string()
    .min(6, "Password must be at leat 6 characters with symbols")
    .required("Password is required"),

  repeatpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat and Confirm Password"),
});
const ResetPassword = () => {
  const toast = useToast();
  const { token } = useParams();
  const naviagte = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["verify-forgot-token"],
    mutataionFn: verifyForgotToken,
    enabled: !!token,

    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        // duration: 5000,
        // isClosable: true,
      });
      naviagte("/signup");
    },
    onSettled: () => {
      naviagte("/reset-success");
    },
  });
  if (isLoading)
    return (
      <Center h="100vh">
        <Spinner />{" "}
      </Center>
    );
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
              mutate({ token, password: values.password });
            }}
            validationSchema={resetValidationSchema}
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

                  <Button w={"full"} type="submit">
                    Reset Password
                  </Button>

                  {/* <Box>
                    <Link to={"/ResetPassword"}>
                      <Button mt={3} w={"full"}>
                        Reset password
                      </Button>
                    </Link>
                  </Box> */}

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
