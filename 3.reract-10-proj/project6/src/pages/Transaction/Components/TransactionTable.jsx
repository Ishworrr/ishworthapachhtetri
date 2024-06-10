import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
  TagCloseButton,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: {
        name: "NPR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ रु81,123.10",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-रु55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#bbc4cb",
    processing: "#F5A50B",
    completed: "#24ca96",
    cancelled: "#f33f3f",
  };
  return (
    <div>
      <TableContainer>
        <Table variant="simple" colorScheme="gray">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Date & Time</Th>
              <Th>Type</Th>
              <Th isNumeric>Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody color={"p.black"}>
            {tableData.map((data) => (
              <Tr key={data.id}>
                <Td fontSize={"md"} fontWeight={"medium"}>
                  {data.id}
                </Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize={"14px"} fontWeight={"medium"}>
                      {data.date}
                    </Text>
                    <Text fontSize={"12px"} fontWeight={"medium"} color="gray">
                      {data.time}
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize={"md"} fontWeight={"medium"}>
                      {data.type.name}
                    </Text>
                    <Text
                      fontSize={"12px"}
                      fontWeight={"medium"}
                      color="black.60"
                    >
                      {data.type?.tag}
                    </Text>
                  </Stack>
                </Td>
                <Td fontSize={"md"} fontWeight={"medium"}>
                  {data.amount}
                </Td>
                <Td fontSize={"md"} fontWeight={"medium"}>
                  <Tag bg={statusColor[data.status]}>{data.status}</Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionTable;
