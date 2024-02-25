// SvgRectangle.js
import React from 'react';

const SvgRectangle = ({ width, height, fillColor, strokeColor }) => (
  <svg className="w-full">
    <rect
      width={width}
      height={height}
      y={`-${height}`} // Set the y attribute to move the rectangle upward
      style={{ fill: fillColor, stroke: strokeColor, strokeWidth: 1 }}
    />
  </svg>
);

export default SvgRectangle;
