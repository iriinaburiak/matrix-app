import React from 'react';
import { useMatrix } from '../hooks/useMatrix';
import { Cell } from '../types';

interface MatrixCellProps {
  cell: Cell;
  rowIndex: number;
  colIndex: number;
}

const MatrixCell: React.FC<MatrixCellProps> = ({ cell, rowIndex, colIndex }) => {
  const { updateCell } = useMatrix();

  const handleClick = () => {
    updateCell(rowIndex, colIndex, cell.amount + 1);
  };

  return (
    <div onClick={handleClick} style={{ padding: '10px', border: '1px solid black' }}>
      {cell.amount}
    </div>
  );
};

export default MatrixCell;
