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
import { BsPatchCheckFill } from "react-icons/bs";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

const ResetPasswordSuccess = () => {
  return (
    <Container>
      <Center minH={"100vh"}>
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCrad={true}
        >
          <VStack spacing={6}>
            <Icon as={BsPatchCheckFill} boxSize={16} color={"p.purple"} />
            <Text fontSize={"24px"} fontWeight={"medium"} color={"#171717"}>
              Password Reset Done
            </Text>
            <Text textAlign={"center"} textStyle={"p2"} color={"p.black"}>
              Now you can access you account.
            </Text>

            <Box w={"full"}>
              <Link to={"/signin"}>
                <Button mt={3} w={"full"}>
                  Sign In
                </Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>

    // <Box as='b' color={'p.black'}></Box>
  );
};

export default ResetPasswordSuccess;
