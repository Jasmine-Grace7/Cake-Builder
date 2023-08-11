import { useState } from "react";
import LayerForm from "./forms/LayerForm";
import { CakeLayerModel } from "../models/cakeLayerModel";

interface LayerFormProps {
    updateCake(cake: CakeLayerModel): void;
}

function LayerAdd({}: LayerFormProps) {
    const [display, setDisplay] = useState(true);
    const [cake, setCake] = useState<CakeLayerModel[]>([
    ]);

    function updateCake(cakeLayer: CakeLayerModel) {
        // Copy
        const tempCake = cake.slice(0);
    
        // Change
        tempCake.push(cakeLayer);
    
        // Replace
        setCake(tempCake);
      }
    
    return (
        <div>
        {display ? (
            <button onClick={() => setDisplay(false)}>Add a Layer</button>
        ): (
            <LayerForm updateCake={updateCake} />
        )}
        </div>
    );
}

export default LayerAdd;