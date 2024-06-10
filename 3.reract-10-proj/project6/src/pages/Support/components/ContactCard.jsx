import React from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p={6} borderRadius={4} flexGrow={1}>
      <Stack spacing={6}>
        <Text fontWeight={"medium"} fontSize={"sm"}>
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name" />
          </FormControl>

          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input placeholder="Enter Your Surname" />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter Your Email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea _placeholder="Message" />
        </FormControl>

        <Checkbox defaultChecked>
          <Text fontSize={"12px"}>
            {" "}
            I agree with
            <Box as="span" color="p.purple">
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize={"sm"}>Send a Message</Button>
          <Button fontSize={"sm"} colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
