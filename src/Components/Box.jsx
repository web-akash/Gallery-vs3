import React from "react";

const Box = ({
  className,
  onChange,
  onClick,
  children,
  onDrop,
  onDragOver,
  onDragStart,
  key,
  draggable,
}) => {
  return (
    <div
      key={key}
      onChange={onChange}
      draggable={draggable}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onClick={onClick}
      className={className}
      onDragStart={onDragStart}
    >
      {children}
    </div>
  );
};

export default Box;
