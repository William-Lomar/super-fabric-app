import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { SuperFabric, NSuperFabric } from 'super-fabric';
import { getKeysEnum } from '../../utils/utils';

interface IPropsEditDimensionsComponent {
    superfabric?: SuperFabric
}

const EFormat = NSuperFabric.NDimension.EFormat;
const EOrientation = NSuperFabric.NDimension.EOrientation;

export default function EditDimensionsComponent({ superfabric }: IPropsEditDimensionsComponent) {
    const [format, setFormat] = useState(EFormat.Custom);
    const [orientation, setOrientation] = useState(EOrientation.Portrait);

    const formats: { value: NSuperFabric.NDimension.EFormat, description: string }[] = getKeysEnum(EFormat).map((key) => {
        return {
            //@ts-ignore
            value: EFormat[key],
            description: key
        }
    })

    const orientations: { value: string, description: string }[] = getKeysEnum(EOrientation).map((key) => {
        return {
            //@ts-ignore
            value: EOrientation[key],
            description: key
        }
    })

    function changeFormat(event: SelectChangeEvent) {
        setFormat(event.target.value as any);
        //TODO
        // if(superfabric) superfabric.set(event.target.value as any);
    }

    function changeOrientation(event: SelectChangeEvent) {
        setOrientation(event.target.value as any);
        if(superfabric) superfabric.setOrientation(event.target.value as any);
    }

    return (
        <div>
            <Select value={format as any} label="Format" onChange={changeFormat}>
                {
                    formats.map((format) => <MenuItem value={format.value}>{format.description}</MenuItem>)
                }
            </Select>
            <Select value={orientation} label="Orientation" onChange={changeOrientation}>
                {
                    orientations.map((orientation) => <MenuItem value={orientation.value}>{orientation.description}</MenuItem>)
                }
            </Select>
        </div>
    )
}