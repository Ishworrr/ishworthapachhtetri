import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import Card from "../../../components/Card";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";

const RegisterSuccess = () => {
  const toast = useToast();
  const { token } = useParams();
  const naviagte = useNavigate();

  const { isSuccess, isLoading } = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: verifyEmailAddressSignup(token),
    enabled: !!token,

    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      naviagte("/Signup");
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
        {isSuccess && (
          <Card
            p={{
              base: "4",
              md: "10",
            }}
            showCrad={true}
          >
            <VStack
              spacing={6}
              // justify={"center"}
              // alignItems={"center"}
              // minH={"100vh"}
            >
              <Icon as={BsPatchCheckFill} boxSize={16} color={"green"} />
              <Text fontSize={"24px"} fontWeight={"medium"} color={"#171717"}>
                Successfully Registration
              </Text>
              <Text textAlign={"center"} textStyle={"p2"} color={"p.black"}>
                Hurray! You have successfully created your account. Enter the
                app to explore all it’s features.
              </Text>

              <Box w={"full"}>
                <Link to={"/signin"}>
                  <Button w={"full"}>Enter the App</Button>
                </Link>
              </Box>
            </VStack>
          </Card>
        )}
      </Center>
    </Container>

    // <Box as='b' color={'p.black'}></Box>
  );
};

export default RegisterSuccess;
