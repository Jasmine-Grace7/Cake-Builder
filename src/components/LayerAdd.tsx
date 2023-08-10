import { useState } from "react";
import LayerForm from "./forms/LayerForm";
import { CakeLayerModel } from "../models/cakeLayerModel";

interface LayerFormProps {
    updateCake(cake: CakeLayerModel): void;
}

function LayerAdd({}: LayerFormProps) {
    const [display, setDisplay] = useState(true);
    return (
        <div>
        {display ? (
            <button onClick={() => setDisplay(false)}>Add a Layer</button>
        ): (
            <div></div>
        )}
        </div>
    );
}
