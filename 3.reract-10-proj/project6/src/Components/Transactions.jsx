import React, { Fragment } from "react";
import { CustomCard } from "../chakra/CustomCard";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { SiBitcoinsv } from "react-icons/si";
const Transactions = () => {
  const Transactions = [
    {
      id: "1",
      icon: TbCurrencyRupeeNepalese,
      text: "NPR Deposit",
      amount: "+ रु९०,००००  ",
      timeStamp: "2022-08-04 1:15 PM",
    },
    {
      id: "2",
      icon: SiBitcoinsv,
      text: "BTC Sell ",
      amount: "- 12.48513391 BTC",
      timeStamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: TbCurrencyRupeeNepalese,
      text: "NPR Deposit",
      amount: "+ रु81,123.10",
      timeStamp: "2022-08-04 1:15 PM",
    },
    {
      id: "4",
      icon: TbCurrencyRupeeNepalese,
      text: "NPR Deposit",
      amount: "+112,312.24 ",
      timeStamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h={"full"}>
      <Text fontSize={"sm"} color={"black.80"} mb="4">
        Recent Transcations
      </Text>

      <Stack spacing={4}>
        {Transactions.map((Transaction, i) => (
          <Fragment key={Transaction.id}>
            {i !== 0 && <Divider />}
            {/* <Flex key={Transaction.id} gap={4} bg="red" w={"full"}> */}
            <Flex gap={4}>
              <Grid
                boxSize={10}
                borderRadius={"full"}
                bg={"black.5"}
                placeItems={"center"}
              >
                {/* <Icon as={TbCurrencyRupeeNepalese} />
              <Icon as={SiBitcoinsv} /> */}
                <Icon as={Transaction.icon} />
              </Grid>
              {/* // <Flex justify={"space-between"} bg={"blue"} w={"full"}> */}
              <Flex justify={"space-between"} w={"full"}>
                <Stack spacing={0}>
                  <Text textStyle={"h6"}>{Transaction.text}</Text>
                  <Text fontSize={"sm"} color={"black.40"}>
                    {Transaction.timeStamp}
                  </Text>
                </Stack>
                <Text textStyle={"h6"}>{Transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w={"full"} colorScheme="gray" mt={2}>
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
