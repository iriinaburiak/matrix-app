import React, { useEffect } from 'react';
import { useMatrix } from '../hooks/useMatrix';

interface MatrixProps {
  rows: number;
  cols: number;
}

const Matrix: React.FC<MatrixProps> = ({ rows, cols }) => {
  const { matrix, setMatrix, addRow, removeRow } = useMatrix();

  useEffect(() => {
    const initialMatrix = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({ amount: 0 }))
    );
    setMatrix(initialMatrix);
  }, [rows, cols, setMatrix]);


  return (
    <div>
      {/* Ваш контент */}
    </div>
  );
};

export default Matrix;
