// src/components/MatrixRow.tsx
import React from 'react';
import { Cell } from '../types';
import MatrixCell from './MatrixCell';
import { calculateSum } from '../utils/calculations';

interface MatrixRowProps {
  row: Cell[];
  rowIndex: number;
}

const MatrixRow: React.FC<MatrixRowProps> = ({ row, rowIndex }) => {
  return (
    <tr>
      {row.map((cell, colIndex) => (
        <MatrixCell key={colIndex} cell={cell} rowIndex={rowIndex} colIndex={colIndex} />
      ))}
      <td>{calculateSum(row)}</td>
    </tr>
  );
};

export default MatrixRow;
