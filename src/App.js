import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './colorSeed';
import { generatePalette } from './ColorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        <Palette {...seedColors[1]} />
      </div>
    );
  }
}

export default App;
