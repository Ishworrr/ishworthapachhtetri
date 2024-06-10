import React from "react";
// import Sidenav from "../../Components/Sidenav";
// import TopNav from "../../Components/TopNav";
// import { Box, Flex } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Portfolio from "./Portfolio";
import PriceSection from "./PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "../../Components/Transactions";
import InfoCard from "../../Components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl={"../../../public/Visual.png"}
            text={
              "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            }
            tegText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl={"../../../public/Visual2.png"}
            text={
              "Learn more about our real estate, mortgage, and  corporate account services"
            }
            tegText="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
