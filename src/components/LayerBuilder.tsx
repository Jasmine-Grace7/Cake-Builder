import { CakeLayerModel } from "../models/cakeLayerModel";
import "../styles/LayerBuilder.css"

interface CakeLayerProps {
    cakeLayer: CakeLayerModel;
    remove(): void;
}

function LayerBuilder({ cakeLayer, remove }: CakeLayerProps) {
    const widthPercentage = cakeLayer.width * 10;
    const heightPercentage = cakeLayer.height * 10;
    
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
            return 'lavender';
        } else if (color === 'white') {
            return 'mintcream';
        } else if (color === 'Select Color') {
            return 'mintcream';
        }
    }
    
    return (
        <div className='LayerBuilder'>
        <p className='LayerInfo'>{cakeLayer.color}</p>
        <div className="color-box" style={{backgroundColor: ColorPicker(cakeLayer.color)}}></div>
        <p className='LayerInfo'>{cakeLayer.width + ':'}</p>
        <div className="LayerBar">
            <div className="InfoBar" style={{width: widthPercentage + '%'}}></div>
        </div>
        <p className='LayerInfo'>{cakeLayer.height + ':'}</p>
        <div className="LayerBar">
            <div className="InfoBar" style={{width: heightPercentage + '%'}}></div>
        </div>
        <button onClick={remove}>Delete</button>
        </div>
    );
}

export default LayerBuilder;