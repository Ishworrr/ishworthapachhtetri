import React from "react";
import { CustomCard } from "../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
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
  const timeStamps = [
    "7:15 PM",
    "7:55 PM",
    "8:15 PM",
    "9:15 PM",
    "8:55 PM",
    "9:55 PM",
    "10:15 PM",
  ];
  return (
    <CustomCard h={"full"}>
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
      <Tabs variant="soft-rounded">
        <Flex justifyContent="flex-end">
          <TabList bg={"black.5"} p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                // _selected={{ color: "white", bg: "blue.500" }}
                _selected={{ bg: "white" }}
                key={tab}
                fontSize={"sm"}
                p="6px"
                borderRadius={"4px"}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="../../../public/Graph.svg" mt={"48px"} />
            <HStack justify={"space-between"}>
              {timeStamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
