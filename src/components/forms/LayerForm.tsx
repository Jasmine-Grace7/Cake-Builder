import { FormEvent, useState } from "react";
import { CakeLayerModel } from "../../models/cakeLayerModel";

interface LayerFormProps {
    updateCake(cake: CakeLayerModel): void;
}

function LayerForm({ updateCake }: LayerFormProps) {
    const [color, setColor] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    function createLayer(event: FormEvent) {
        event.preventDefault();

        const cakeLayer : CakeLayerModel = {
            color,
            width: parseInt(width),
            height: parseInt(height)
        };

        setColor('');
        setWidth('');
        setHeight('')

        updateCake(cakeLayer)
    }

    return (
        <form onSubmit={createLayer}>
            <select>
                <option value={'red'}>Red</option>
                <option value={'pink'}>Pink</option>
                <option value={'orange'}>Orange</option>
                <option value={'yellow'}>Yellow</option>
                <option value={'green'}>Green</option>
                <option value={'cyan'}>Cyan</option>
                <option value={'violet'}>Violet</option>
                <option value={'black'}>Black</option>
            </select>
            <label htmlFor="width">Width</label>
            
            <label htmlFor="width">Height</label>
        </form>
    )
}

export default LayerForm;