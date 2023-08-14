import { FormEvent, useState } from "react";
import { CakeLayerModel } from "../../models/cakeLayerModel";
import "../../styles/LayerFormStyle.css"

interface LayerFormProps {
    addLayer(layer: CakeLayerModel): void;
    setDisplay(): void;
}

function LayerForm({ addLayer, setDisplay}: LayerFormProps) {
    const [color, setColor] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    function createLayer(event: FormEvent) {
        event.preventDefault();
        const layer: CakeLayerModel = {color, width: parseInt(width), height: parseInt(height)}
        addLayer(layer);
        setColor('');
        setWidth('');
        setHeight('');
        setDisplay();
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
                <option value={'white'}>White</option>
            </select>
            <div className="range-div">
            <label htmlFor="width">Width: {width}</label>
            <input type="range" value={width} min={1} max={10} step={0.5} onChange={(event) => setWidth(event.target.value)} />
            </div>
            <div className="range-div">
            <label htmlFor="height">Height: {height}</label>
            <input type="range" value={height} min={0.5} max={10.0} step={0.5} onChange={(event) => setHeight(event.target.value)} />
            </div>
            <button type="submit" onClick={createLayer}>Save</button>
            <button onClick={setDisplay}>Cancel</button>
        </form>
    )
}

export default LayerForm;