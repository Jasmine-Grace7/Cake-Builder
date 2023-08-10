import React from 'react';
import './App.css';
import Cake from './components/Cake'
import LayerForm from './components/forms/LayerForm';

function App() {
  return (
    <div className="App">
      <header>
      <LayerForm />
      </header>
    </div>
  );
}

export default App;
