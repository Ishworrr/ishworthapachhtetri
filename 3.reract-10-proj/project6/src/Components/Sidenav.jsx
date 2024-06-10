import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();
  console.log(location);

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    {
      icon: RiDashboardHorizontalFill,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      justifyContent={"space-between"}
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: '"16rem"',
      }}
      h="100vh"
      bg="white"
    >
      <Box>
        <Heading fontSize="25px" as="h1" pt="3rem" textAlign={"center"}>
          @IshworCrypto
        </Heading>

        <Box mt={6} mx={1}>
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F3" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                borderRadius={"10px"}
                // key={nav.text}
                py={3}
                px={8}
                _hover={{
                  bg: "#F3F3F3",
                  color: "#171717",
                }}
                //color={"#797E82"}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight={"medium"} color={"#797E82"}>
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt={6} mx={3} mb={6}>
        <Link to={"/support"}>
          <HStack
            borderRadius={"10px"}
            py={3}
            px={16}
            bg={isActiveLink("/support") ? "#F3F3F3" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F3",
              color: "#171717",
            }}
            // color={"#797E82"}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight={"medium"} color={"#171717"}>
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
