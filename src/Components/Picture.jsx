import React from "react";

const Picture = ({ className, children }) => {
  return <picture className={className}>{children}</picture>;
};

export default Picture;
