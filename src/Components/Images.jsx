import React from "react";

const Images = ({
  src,
  className,
  alt,
  onDragStart,
  draggable,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
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
      onTouchEnd={onTouchEnd}
    />
  );
};

export default Images;
