import { useState } from "react";
import { CakeLayerModel } from "../models/cakeLayerModel";
import LayerForm from "./forms/LayerForm";
import LayerBuilder from "./LayerBuilder";
import "../styles/CakeBuilder.css"

function CakeBuilder(props: any) {
    const [display, setDisplay] = useState(true);

    return (
        <div className="cake-builder">
            {display ? (
            <button className="add-layer" onClick={() => setDisplay(false)}>Add a Layer</button>
        ): (
            <LayerForm addLayer={props.a} setDisplay={() => setDisplay(true)}/>
            )}
            {props.cake.map((cakeLayer: CakeLayerModel, index: number) => (
                <LayerBuilder key={cakeLayer.toString()} remove={() => props.remove(index)} cakeLayer={cakeLayer} />
            ))}
        </div>
    )
}

export default CakeBuilder;