import { useState } from "react";
import { CakeLayerModel } from "../models/cakeLayerModel";
import CakeLayer from "./CakeLayer";
import "../styles/Cake.css"

function Cake(props: any) {
    const [cake, setCake] = useState<CakeLayerModel[]>([
    ]);

    return(
        <div className="Cake-Layers">
            {props.cake.map ((cakeLayer: CakeLayerModel) => ( <CakeLayer cakeLayer={cakeLayer}/>))}
            
        </div>
    )

}

export default Cake;