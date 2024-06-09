import React from "react";
import { CustomCard } from "../../chakra/CustomCard";
import {
  Button,
  HStack,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PiHandDepositFill } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { PiHandWithdraw } from "react-icons/pi";
import { BsArrowUpRight } from "react-icons/bs";
const PriceSection = () => {
  return (
    <CustomCard>
      <HStack justifyContent={"space-between"} align={"start"}>
        <Stack>
          <HStack color="black.80">
            <Text fontSize={"sm"}> Wallet Balance</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>

          <HStack
            spacing={4}
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
              <HStack fontWeight={"medium"} color={"green.500"}>
                <Icon as={BsArrowUpRight} />
                <Text fontSize={"sm"} fontWeight={"medium"}>
                  11%
                </Text>
              </HStack>{" "}
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>

          <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
        </HStack>
      </HStack>
      <Image w="100%" src="../../../public/Graph.svg" />
    </CustomCard>
  );
};

export default PriceSection;
