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
                superfabric.open().then(() => {
                    console.log('project loaded');
                }).catch((err) => {
                    console.error(err);
                })
            }} variant="outlined" >
                Open
            </Button>
        </div>
    )
}