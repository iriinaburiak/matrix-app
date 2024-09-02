import { createContext, useState, ReactNode } from 'react';
import { Cell } from '../types';

interface MatrixContextProps {
  matrix: Cell[][];
  setMatrix: React.Dispatch<React.SetStateAction<Cell[][]>>;
  updateCell: (rowIndex: number, colIndex: number, amount: number) => void;
  addRow: () => void;
  removeRow: (rowIndex: number) => void;
}

export const MatrixContext = createContext<MatrixContextProps | undefined>(undefined);

interface MatrixProviderProps {
  children: ReactNode;
}

export const MatrixProvider: React.FC<MatrixProviderProps> = ({ children }) => {
  const [matrix, setMatrix] = useState<Cell[][]>([]);

  const updateCell = (rowIndex: number, colIndex: number, amount: number) => {
    const newMatrix = [...matrix];
    newMatrix[rowIndex][colIndex].amount = amount;
    setMatrix(newMatrix);
  };

  const addRow = () => {
    const newRow = Array.from({ length: matrix[0]?.length || 0 }, () => ({ amount: 0 }));
    setMatrix([...matrix, newRow]);
  };

  const removeRow = (rowIndex: number) => {
    const newMatrix = matrix.filter((_, index) => index !== rowIndex);
    setMatrix(newMatrix);
  };

  return (
    <MatrixContext.Provider value={{ matrix, setMatrix, updateCell, addRow, removeRow }}>
      {children}
    </MatrixContext.Provider>
  );
};
