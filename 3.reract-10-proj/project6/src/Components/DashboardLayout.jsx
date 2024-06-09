import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>

        <SideDrawer isOpen={isOpen} onClose={onClose} />

        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen} />

          <Container maxW={"70rem"} px="20">
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
