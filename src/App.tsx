import React from 'react';
import { MatrixProvider } from './context/MatrixContext';
import Matrix from './components/Matrix';

const App: React.FC = () => {
  return (
    <MatrixProvider>
      <Matrix rows={10} cols={5} />
    </MatrixProvider>
  );
};

export default App;
