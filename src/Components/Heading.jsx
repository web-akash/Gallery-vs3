import React from "react";

const Heading = ({ onClick, className, children }) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default Heading;
