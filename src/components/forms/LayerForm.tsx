import { FormEvent, useState } from "react";
import { CakeLayerModel } from "../../models/cakeLayerModel";

interface LayerFormProps {
    updateCake(cake: CakeLayerModel): void;
}

function LayerForm({ updateCake }: LayerFormProps) {
    const [color, setColor] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const handleCancel = () => {
        setColor("");
        setWidth("");
        setHeight("");
    };

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
            <select value={color} onChange={(event) => setColor(event.target.value)}>
                <option value={''}>Select Color</option>
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
            <input type="range" value={width} min={1} max={10} onChange={(event) => setWidth(event.target.value)} />
            <label htmlFor="height">Height</label>
            <input type="range" value={height} min={0.5} max={10.0} onChange={(event) => setHeight(event.target.value)} />
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default LayerForm;