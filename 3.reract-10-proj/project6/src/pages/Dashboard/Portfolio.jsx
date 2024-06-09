import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PiHandDepositFill } from "react-icons/pi";
import { PiHandWithdraw } from "react-icons/pi";
const Portfolio = () => {
  return (
    <HStack
      bg="white"
      borderRadius={"xl"}
      p="6"
      marginTop={5}
      w={"70vw"}
      justifyContent="space-around"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 5,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize={"sm"}> Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle={"h2"} fontWeight={"medium"}>
            $11,111,111.111
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize={"sm"}> Wallet Balance</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>

          <HStack
            spacing={5}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                11.111
              </Text>{" "}
              <Tag colorScheme="purple" fontWeight={"medium"} fontSize={"12px"}>
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h3"} fontWeight={"medium"}>
                रु111,111,111,11
              </Text>{" "}
              <Tag colorScheme="purple" fontSize={"12px"}>
                NPR
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={PiHandDepositFill} />}>Deposit</Button>

        <Button leftIcon={<Icon as={PiHandWithdraw} />}>Withdrawal</Button>
      </HStack>
    </HStack>
  );
};

export default Portfolio;
