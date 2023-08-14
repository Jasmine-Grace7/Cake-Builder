import { CakeLayerModel } from "../models/cakeLayerModel";

interface cakeProps {
    cakeLayer: CakeLayerModel;
}

function CakeLayer({cakeLayer}: cakeProps) {
    return (
        <div className='CakeLayer' style={{color: cakeLayer.color, width: cakeLayer.width + 'px', height: cakeLayer.height + 'px'}}>
        </div>
    );
}

export default CakeLayer;