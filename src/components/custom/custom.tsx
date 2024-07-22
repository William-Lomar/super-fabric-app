import { SuperFabric } from "super-fabric";
import { MuiColorInput, MuiColorInputColors } from 'mui-color-input'
import { useState } from "react";
import { DebounceTime } from "../../utils/debounce";

interface IPropsCustomCompent {
    superfabric?: SuperFabric
}

export default function CustomCompent({ superfabric }: IPropsCustomCompent) {
    const [actualValue, setActualValue] = useState('#ffffff');
    const [backgroundValue, setBackgroundValue] = useState('#ffffff');

    const debounce = new DebounceTime(50);

    function changeActualColor(value: string, colors: MuiColorInputColors) {
        debounce.exec(() => {
            setActualValue(value);
            if(superfabric) superfabric.setColor(value);
        })
    }

    function changeBackgroundColor(value: string, colors: MuiColorInputColors) {
        debounce.exec(() => {
            setBackgroundValue(value);
            if(superfabric) superfabric.setBackgroundColor(value);
        })
    }
    return (
        <div>
            <div>Actual Color: </div>
            <MuiColorInput value={actualValue} onChange={changeActualColor}></MuiColorInput>
            <div>Background Color: </div>
            <MuiColorInput value={backgroundValue} onChange={changeBackgroundColor} ></MuiColorInput>
        </div>
    )
}