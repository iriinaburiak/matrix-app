import React from 'react';
import { useMatrix } from '../hooks/useMatrix';
import { calculatePercentile } from '../utils/calculations';

const SummaryRow: React.FC = () => {
  const { matrix } = useMatrix();

  const percentiles = matrix[0].map((_, colIndex) =>
    calculatePercentile(matrix.map(row => row[colIndex].amount), 50)
  );

  return (
    <div>
      {percentiles.map((value, colIndex) => (
        <div key={colIndex} style={{ padding: '10px', border: '1px solid black' }}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default SummaryRow;
