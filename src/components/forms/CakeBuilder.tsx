import { useState } from "react";
import { Cake } from "../../models/cake";

interface CakeBuilderProps {
    updateCake(cake: Cake): void;
}

function CakeBuilder({ updateCake }: CakeBuilderProps) {
    const [color, setColor] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    return;
}

export default CakeBuilder;