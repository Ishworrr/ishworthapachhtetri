import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaBars, FaUserTie } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box boxShadow={"sm"} px={4} bg={"white"}>
      <HStack
        // boxShadow={"xl"}
        maxW={"70rem"}
        height={"64px"}
        justifyContent={"space-between"}
        // px="32"
        mx={"auto"}
      >
        <Icon
          as={FaBars}
          onClick={onOpen}
          cursor={"pointer"}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        {/* <Container> */}
        <Heading fontSize={"28px"}>{title}</Heading>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {/* Actions */}
            <Icon
              cursor="pointer"
              as={FaUserTie}
              fontSize="24px"
              display={{
                base: "none",
                lg: "block",
              }}
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
            {/* <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem> */}
          </MenuList>
        </Menu>
        {/* </Container> */}
      </HStack>
    </Box>
  );
};

export default TopNav;
