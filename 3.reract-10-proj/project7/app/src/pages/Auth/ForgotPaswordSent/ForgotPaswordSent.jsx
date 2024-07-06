import {
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
import { useParams } from "react-router-dom";

const ForgotPaswordSent = () => {
  const params = useParams();
  const { email } = useParams();
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
              Successfully Sent
            </Text>
            <Text textAlign={"center"} textStyle={"p2"} color={"p.black"}>
              We have sent you an email verification to <b>{email}</b>. Please
              follow the instructions from the email.
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>

    // <Box as='b' color={'p.black'}></Box>
  );
};

export default ForgotPaswordSent;
