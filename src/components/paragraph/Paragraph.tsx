import React from "react";
import "./paragraph.css";

const Paragraph = ({ children, ...rest }: any) => {
  return (
    <div className="vapor_paragraph" {...rest}>
      {children}
    </div>
  );
};

export default Paragraph;
