import {
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import Card from "../../../components/Card";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { sendVerificationMail } from "../../../api/query/userQuery";

const RegisterEmailVerify = () => {
  const toast = useToast();
  const { email } = useParams();
  // const email = location.state?.email;

  console.log(location);
  if (email === "") {
    return <Center h="100vh">Invalid Email, Bitch</Center>;
  }
  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn: sendVerificationMail,
    onSettled: (data) => {
      // navigate("/register-email-and-verify", {
      //   state: { email },
      // });
      console.log(data);
    },
    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, [email]);

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
              We have sent you an email verification to <b>{email}</b>. If you
              didn’t receive it, click the button below. Please check your email
              for a verification link. If you haven't received
            </Text>

            <Button
              width={"full"}
              variant={"outline"}
              onClick={() => {
                mutate({ email });
              }}
              isLoading={isLoading}
            >
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
