import React from "react";
import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-120 md:text-center`}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
    </div>
  );
};

export default Heading;
