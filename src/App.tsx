import React, { useState } from 'react';
import './App.css';
import Cake from './components/Cake'
import CakeBuilder from './components/CakeBuilder';
import { CakeLayerModel } from './models/cakeLayerModel';

function App() {
  const [cake, setCake] = useState<CakeLayerModel[]>([
  ]);

  function addLayer(layer: CakeLayerModel) {
    setCake([...cake, layer]);
    console.log(cake)
  }

  function removeLayerByIndex(index: number) {
    const tempCake = cake.slice(0);
    tempCake.splice(index, 1);
    setCake(tempCake);
  }

  return (
    <div className="App">
      <header>
      <CakeBuilder a={addLayer} 
      remove={removeLayerByIndex}
      cake={cake}/>
      </header>
    </div>
  );
}

export default App;
