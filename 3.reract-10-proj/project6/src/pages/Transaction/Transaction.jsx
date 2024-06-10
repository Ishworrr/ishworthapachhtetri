import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import { SiContentful } from "react-icons/si";
import TransactionTable from "./Components/TransactionTable";
import { Input } from "@chakra-ui/react";
import { PhoneIcon, Search2Icon } from "@chakra-ui/icons";
// import { BsSearch } from "react-icons/bs";

const TransactionPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  const tabss = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <DashboardLayout title={"Transactions"}>
      <Flex justify={"end"} mt={6} mb={3}>
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius={"16px"}>
        <Box>
          <input
            type="range"
            min="0"
            max="3"
            value={tabIndex}
            onChange={handleSliderChange}
          />

          <Tabs index={tabIndex} onChange={handleTabsChange}>
            <TabList
              py={4}
              pb={4}
              // pr={2}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <HStack>
                {tabss.map((tab) => (
                  <Tab key={tab.name} display={"flex"} gap={2}>
                    {tab.name} <Tag colorScheme="gray">{tab.count}</Tag>
                  </Tab>
                ))}
              </HStack>
              <InputGroup maxW={"200px"} pr={6}>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="gray.300" />
                  {/* <Icon as={BsSearch} /> */}
                </InputLeftElement>
                <Input type="tel" placeholder="Search ..." />
              </InputGroup>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
