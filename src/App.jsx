import { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor }}>
      <div className="buttons">
        <button onClick={() => handleColorChange('#00FFFF')}>Cyan</button>
        <button onClick={() => handleColorChange('#905FB0')}>Deep Lilac</button>
        <button onClick={() => handleColorChange('#FF66CD')}>Rose Pink</button>
        <button onClick={() => handleColorChange('#008080')}>Teal</button>
        <button onClick={() => handleColorChange('#c0c0c0')}>Silver</button>
        <button onClick={() => handleColorChange('#ffc0cb')}>Pink</button>
        <button onClick={() => handleColorChange('#add8e6')}>Light Blue</button>
      </div>
    </div>
  );
}

export default App;