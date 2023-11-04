import React from "react";

const Images = ({ src, className, alt, onDragStart, draggable }) => {
  return (
    <img
      src={src}
      className={className}
      alt={alt}
      onDragStart={onDragStart}
      draggable={draggable}
    />
  );
};

export default Images;
