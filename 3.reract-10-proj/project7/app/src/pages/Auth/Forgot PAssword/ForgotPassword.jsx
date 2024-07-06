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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "../../../components/Card";
import { object, string, ref } from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useMutation, useQuery } from "react-query";
import { sendForgotMail } from "../../../api/query/userQuery";

const ForgotPassword = () => {
  const ForgotValidationSchema = object({
    email: string().email("Invalid email").required("Email is required"),
  });

  const [email, setEmail] = useState();

  const toast = useToast();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["forgot-email"],
    mutationFn: sendForgotMail,
    onSettled: (data) => {
      // navigate("/register-email-and-verify", {
      //   state: { email },
      // });
      console.log(data);
      if (email) {
        navigate(`/forgot-success/${email}`);
      }
    },
    onError: (error) => {
      toast({
        title: "Forgot Error",
        description: error.message,
        status: "error",
        // duration:5000,
      });
    },
  });
  return (
    <Container>
      <Center minH={"100vh"}>
        <Card>
          <Link to={"/signin"}>
            <Icon as={AiOutlineArrowLeft} boxSize={6} />
          </Link>
          <Text mt={4} fontWeight={"medium"} textStyle={"h1"}>
            Forgot Password
          </Text>
          <Text textStyle={"p2"} color={"black.60"} mt={4}>
            {" "}
            Enter your email address for which account you want to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              setEmail((prev) => (prev = values.email));
              mutate({ email: values.email });
            }}
            validationSchema={ForgotValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt={8} spacing={6}>
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

                  {/* <Button w={"full"} type="submit"></Button> */}

                  <Button
                    isLoading={isLoading}
                    mt={3}
                    w={"full"}
                    type="submit"
                    variant={"outline"}
                  >
                    Reset password
                  </Button>

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

export default ForgotPassword;
