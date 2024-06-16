import {
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";
import Card from "../../../components/Card";

const RegisterEmailVerify = () => {
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
          <VStack
            spacing={6}
            // justify={"center"}
            // alignItems={"center"}
            // minH={"100vh"}
          >
            <Icon as={MdEmail} boxSize={16} color={"p.purple"} />
            <Text fontSize={"24px"} fontWeight={"medium"} color={"#171717"}>
              Email Verification
            </Text>
            <Text textAlign={"center"} textStyle={"p2"} color={"p.black"}>
              We have sent you an email verification to{" "}
              <b>jenny.wilson@gmail.com</b>. If you didn’t receive it, click the
              button below. Please check your email for a verification link. If
              you haven't received
            </Text>

            <Button width={"full"} variant={"outline"}>
              Resend Verification Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>

    // <Box as='b' color={'p.black'}></Box>
  );
};

export default RegisterEmailVerify;
