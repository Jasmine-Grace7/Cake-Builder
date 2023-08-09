import { Cake } from "../models/cake";


interface CakeBuilderProps {
    cake: Cake;
    remove(): void;
}

function CakeLayer({ cake, remove}: CakeBuilderProps) {
    return;
}

export default CakeLayer;