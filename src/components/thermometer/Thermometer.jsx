import { useState } from "react";
import Buttons from "./buttons/Buttons";
import Temperature from "./temperature/Temperature";
import './Thermometer.css';

function Thermometer() {
    const [count, setCount] = useState(0);

    return (
        <div className='mainContainer'>
            <Temperature count={count} />
            <Buttons setCount={setCount} />
        </div>
    )
}

export default Thermometer;