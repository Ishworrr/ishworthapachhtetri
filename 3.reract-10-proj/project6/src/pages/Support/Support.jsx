import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../../Components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing={"80px"} align={"center"}>
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title={"Contact Us"}
          text={
            " Have a question or just want to know more? Feel free to reach out to us."
          }
        />

        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              imgUrl={"../../../public/Visual2.png"}
              text={"Chat with us now"}
              tegText="Chatbot"
              inverted={true}
            />
          }
          title={"Live Chat"}
          text={" Don’t have time to wait for the answer? Chat with us now."}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
