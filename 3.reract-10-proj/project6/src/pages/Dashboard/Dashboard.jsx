import React from "react";
// import Sidenav from "../../Components/Sidenav";
// import TopNav from "../../Components/TopNav";
// import { Box, Flex } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Portfolio from "./Portfolio";
import PriceSection from "./PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={2}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
