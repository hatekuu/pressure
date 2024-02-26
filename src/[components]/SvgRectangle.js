// SvgRectangle.js
import React from 'react';

const SvgRectangle = ({ width, height, fillColor, strokeColor, rotate }) => {
  const numberOfDivisions = 10; // Tổng số nấc
  const divisionHeight = 250 / numberOfDivisions; // Chiều cao của mỗi nấc
  const styles = {
    transform: `rotate(${rotate}deg)`,
  };
  const divisions = Array.from({ length: numberOfDivisions + 1 }, (_, index) => (
    <g key={index} transform={`rotate(${rotate} ${parseInt(width) - 10} ${index * divisionHeight + divisionHeight / 2})`}>
      {/* Add Text */}
      <text
        x={parseInt(width) - 90} // Đặt vị trí của số để nó không bị tràn ra khỏi hình chữ nhật
        y={(index * divisionHeight + divisionHeight / 2)+10}
        textAnchor="end"
   
        style={{ fill: 'black', fontSize: '13px' }}
      >
        {index}
      </text>

      {/* Add Rectangle */}
      <rect
        x={parseInt(width)-80}
        y={index * divisionHeight}
        width={20}
        height={divisionHeight}
        style={{ fill: 'red', stroke: strokeColor, strokeWidth: 1 }}
      />
    </g>
  ));

  return (
    <svg style={styles}>
      {/* First Rectangle */}
      <rect
        width={width}
        height={height}
        y={0}
        style={{ fill: fillColor, stroke: strokeColor, strokeWidth: 1 }}
      />

      {/* Divisions */}
      {divisions}
    </svg>
  );
};

export default SvgRectangle;
