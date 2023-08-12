import React, { useState } from 'react';
import './App.css';
import Cake from './components/Cake'
import LayerForm from './components/forms/LayerForm';
import CakeLayer from './components/CakeLayer';
import LayerBuilder from './components/LayerBuilder';
import CakeBuilder from './components/CakeBuilder';
import { CakeLayerModel } from './models/cakeLayerModel';

function App() {
  const [cake, setCake] = useState<CakeLayerModel[]>([
  ]);

  function addLayer(layer: CakeLayerModel) {
    setCake([...cake, layer]);
    console.log(cake)
  }

  function updateCake(cakeLayer: CakeLayerModel) {
      // Copy
      const tempCake = cake.slice(0);
  
      // Change
      tempCake.push(cakeLayer);
  
      // Replace
      setCake(tempCake);
    }

  return (
    <div className="App">
      <header>
      <CakeBuilder a={addLayer}/>
      </header>
    </div>
  );
}

export default App;
