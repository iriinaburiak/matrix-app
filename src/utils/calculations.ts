import { Cell } from '../types';

export const calculateSum = (row: Cell[]): number => {
  return row.reduce((sum, cell) => sum + cell.amount, 0);
};

export const findClosestCells = (matrix: Cell[][], target: number, x: number): { row: number, col: number }[] => {
  const flattened = matrix.flat().map((cell, index) => ({
    amount: cell.amount,
    index,
  }));

  return flattened
    .sort((a, b) => Math.abs(a.amount - target) - Math.abs(b.amount - target))
    .slice(0, x)
    .map(({ index }) => ({
      row: Math.floor(index / matrix[0].length),
      col: index % matrix[0].length,
    }));
};

export const calculatePercentile = (data: number[], percentile: number): number => {
  data.sort((a, b) => a - b);
  const index = (percentile / 100) * (data.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  const weight = index - lower;
  
  if (upper >= data.length) return data[lower];
  return data[lower] * (1 - weight) + data[upper] * weight;
};
