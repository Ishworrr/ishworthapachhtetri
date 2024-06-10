import React from "react";
import { CustomCard } from "../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, text, tegText, inverted }) => {
  return (
    <CustomCard
      bgImg={imgUrl}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgColor={inverted ? "p.purple" : "white"}
      //   bg={"white"}
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
        borderRadius={"full"}
      >
        {tegText}
      </Tag>
      <Text
        mt={4}
        fontSize={"18px"}
        fontWeight={"medium"}
        color={inverted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
