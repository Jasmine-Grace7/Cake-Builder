import { useState } from "react";
import { CakeLayerModel } from "../models/cakeLayerModel";
import LayerAdd from "./LayerAdd";

function CakeBuilder() {
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
            <LayerAdd />
        </div>
    )

}

export default CakeBuilder;