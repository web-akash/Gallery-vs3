import React from "react";

const Images = ({
  src,
  className,
  alt,
  onDragStart,
  draggable,
  onTouchStart,
  onTouchMove,
}) => {
  return (
    <img
      src={src}
      className={className}
      alt={alt}
      onDragStart={onDragStart}
      draggable={draggable}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    />
  );
};

export default Images;
