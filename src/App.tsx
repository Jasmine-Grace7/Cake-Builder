import React from 'react';
import './App.css';
import Cake from './components/Cake'
import LayerForm from './components/forms/LayerForm';
import CakeLayer from './components/CakeLayer';
import LayerBuilder from './components/LayerBuilder';
import CakeBuilder from './components/CakeBuilder';

function App() {
  return (
    <div className="App">
      <header>
      <CakeBuilder/>
      </header>
    </div>
  );
}

export default App;
