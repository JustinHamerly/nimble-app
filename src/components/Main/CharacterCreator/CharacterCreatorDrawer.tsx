import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";
import StatAdjuster from "./StatAdjuster";

function CharacterCreatorDrawer () {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

    return (
        <div id="creator-control">
            <Button onClick={toggleDrawer(true)}>EDIT CHARACTER</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <StatAdjuster />
            </Drawer>
        </div>
    )
}

export default CharacterCreatorDrawer