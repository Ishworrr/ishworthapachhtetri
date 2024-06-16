import { Card as ChakraCard } from "@chakra-ui/react";
import React, { Children } from "react";

const Card = ({ children, showCrad, ...props }) => {
  return (
    <ChakraCard
      bg={{
        base: showCrad ? "white" : "transparent",
        md: "white",
      }}
      p={{
        base: showCrad ? "4" : "0",
        md: "6",
      }}
      borderRadius={{
        base: showCrad ? "1rem" : "none",
        md: "1rem",
      }}
      w={"456px"}
      boxShadow={{
        base: showCrad ? "md" : "none",
        // md: "2px 4px 10px rgba(0,0,0,.5) ",
        md: "lg",
      }}
      {...props}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;
