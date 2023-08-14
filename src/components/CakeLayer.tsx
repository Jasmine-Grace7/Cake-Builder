import { CakeLayerModel } from "../models/cakeLayerModel";
import "../styles/CakeLayer.css"

interface cakeProps {
    cakeLayer: CakeLayerModel;
}

function CakeLayer({cakeLayer}: cakeProps) {
    function ColorPicker(color: string) {
        if (color === 'red') {
            return 'indianred'; 
        } else if (color === 'pink') {
            return 'lightpink';
        } else if (color === 'orange') {
            return 'lightsalmon';
        } else if (color === 'yellow') {
            return 'lightgoldenrodyellow';
        } else if (color === 'green') {
            return 'darkseagreen';
        } else if (color === 'cyan') {
            return 'lightseagreen';
        } else if (color === 'violet') {
            return 'mediumpurple';
        } else if (color === 'white') {
            return 'mintcream';
        } else if (color === 'Select Color') {
            return 'mintcream';
        }
    }

    return (
        <div className='CakeLayer' style={{backgroundColor: ColorPicker(cakeLayer.color), width: cakeLayer.width * 10 +  "%", height: cakeLayer.height * 5 + "%"}}>
        </div>
    );
}



export default CakeLayer;