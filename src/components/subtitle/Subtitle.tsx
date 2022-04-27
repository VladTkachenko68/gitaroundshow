import React from "react";
import "./subtitle.css";

const Subtitle = ({ children, ...rest }: any) => {
  return (
    <div className="vapor_subtitle" {...rest}>
      {children}
    </div>
  );
};

export default Subtitle;
