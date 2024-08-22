import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";
import FlavorBioEditor from "./FlavorBioEditor";

function CharacterCreatorPanel () {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

    return (
        <div id="character-creator-panel">
            <Button onClick={toggleDrawer(true)}>EDIT CHARACTER</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <FlavorBioEditor />
                
            </Drawer>
        </div>
    )
}

export default CharacterCreatorPanel