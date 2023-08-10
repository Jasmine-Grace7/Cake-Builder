import { CakeLayerModel } from "../models/cakeLayerModel";

interface CakeProps {
    cake: CakeLayerModel;
}

function CakeLayer({ cake }: CakeProps) {
    return (
        <div className='CakeLayer'></div>
    );
}

export default CakeLayer;