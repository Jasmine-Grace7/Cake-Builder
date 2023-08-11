import { useState } from "react";
import { CakeLayerModel } from "../models/cakeLayerModel";
import LayerForm from "./forms/LayerForm";

function CakeBuilder(props: any) {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            {display ? (
            <button onClick={() => setDisplay(false)}>Add a Layer</button>
        ): (
            <LayerForm addLayer={props.a} />
        )}
        </div>
    )

}

export default CakeBuilder;