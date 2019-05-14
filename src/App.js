import React from 'react';
import Palette from './Palette';
import seedColors from './colorSeed';

function App() {
  return (
    <div>
      <Palette {...seedColors[0]} />
    </div>
  );
}

export default App;
