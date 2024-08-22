import React, { useState } from "react";
import './CharacterCreatorPanel.css'
import { Button, Drawer } from "@mui/material";
import FlavorBioEditor from "./FlavorBioEditor";
import StatArraySelector from "./StatArraySelector";

function CharacterCreatorPanel () {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>CREATE CHARACTER</Button>
            <Drawer open={open} onClose={toggleDrawer(false)} id="character-creator-panel">
                <FlavorBioEditor />
                <StatArraySelector />
            </Drawer>
        </div>
    )
}

export default CharacterCreatorPanel