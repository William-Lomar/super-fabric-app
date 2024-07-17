import { Button } from "@mui/material";
import { SuperFabric } from "super-fabric";
import "./save.css";

interface IPropsSaveComponent {
    superfabric?: SuperFabric
}

export default function SaveComponent({ superfabric }: IPropsSaveComponent) {
    return (
        <div className="buttons-save">
            <Button onClick={() => {
                if (!superfabric) return;
                superfabric.save();
            }} variant="outlined" >
                Save
            </Button>
            <Button onClick={() => {
                if (!superfabric) return;
                superfabric.open();
            }} variant="outlined" >
                Open
            </Button>
        </div>
    )
}