import { Box, Container, Flex, calc, useDisclosure } from "@chakra-ui/react";
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

          <Container
            overflowX={"hidden"}
            overflowY={"hidden"}
            maxW={"70rem"}
            //  h={"calc(100vh-88px"}
            px="20"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
