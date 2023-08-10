import { CakeLayerModel } from "../models/cakeLayerModel";

interface CakeProps {
    cakeLayer: CakeLayerModel;
    remove(): void;
}

function LayerBuilder({ cakeLayer, remove }: CakeProps) {
    return (
        <div className='LayerBuilder'>
        <p className='LayerInfo'>{cakeLayer.color}</p>
        <p className='LayerInfo'>{cakeLayer.width}</p>
        <p className='LayerInfo'>{cakeLayer.height}</p>
        <button onClick={remove}>Delete</button>
        </div>
    );
}

export default LayerBuilder;