import React from "react";
import DashboardLayout from "../../../Components/DashboardLayout";
import {
  Box,
  Button,
  Card,
  Center,
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
const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      my={5}
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW={"380px"}>
        <Icon as={icon} boxSize={6} color={"p.purple"} />
        <Text textStyle={"h1"} as={"h1"} fontWeight={"medium"}>
          {title}
        </Text>
        <Text fontSize={"sm"} color={"gray.60"}>
          {text}
        </Text>
      </Stack>
      <Box maxW={"550px"} w={"full"}>
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
