import { Button } from '@mui/material';
import { SuperFabric } from 'super-fabric';

interface IPropsEditDimensionsComponent {
    superfabric?: SuperFabric
}

export default function EditDimensionsComponent({ superfabric }: IPropsEditDimensionsComponent) {
    return (
        <Button onClick={() => {
            if (!superfabric) return;

            const colors = ['red', 'blue', 'green', 'black', 'yellow'];

            const randomIndex = Math.floor(Math.random() * colors.length);
            superfabric.setBackgroundColor(colors[randomIndex]);
        }} variant="outlined" >
            Change background color
        </Button>
    )
}