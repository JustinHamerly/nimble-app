import React, { useContext, useEffect, useState } from "react";
import './FlavorBioEditor.css'
import { SelectedCharacterContext } from "../../../context/SelectedCharacterContext";
import { Box, FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";

function FlavorBioEditor() {
    
    const charContext = useContext(SelectedCharacterContext);
    const [race, setRace] = useState('');
    const [charClass, setCharClass] = useState('');
    if (!charContext) return null;

    return (
        <Box
            component='form'
            autoComplete="off"
            noValidate
            id="flavor-bio-editor"
        >
            <FormControl className="bio-form-field">
                <TextField id="outlined-basic" variant="standard" />
                <FormHelperText>Name</FormHelperText>
            </FormControl>
            <FormControl className="bio-form-field">
                <Select
                    id="race-select"
                    value={race}
                    variant="standard"
                    onChange={(e: SelectChangeEvent)=>setRace(e.target.value)}
                >
                    <MenuItem className="menu-item" value={'human'}>Human</MenuItem>
                    <MenuItem className="menu-item" value={'elf'}>Elf</MenuItem>
                    <MenuItem className="menu-item" value={'dwarf'}>Dwarf</MenuItem>
                    <MenuItem className="menu-item" value={'halfling'}>Halfling</MenuItem>
                </Select>
                <FormHelperText>Race</FormHelperText>
            </FormControl>
            <FormControl className="bio-form-field">
                <Select
                    id="class-select"
                    value={charClass}
                    variant="standard"
                    onChange={(e: SelectChangeEvent)=>setCharClass(e.target.value)}
                >
                    <MenuItem className="menu-item" value={'berserker'}>Berserker</MenuItem>
                    <MenuItem className="menu-item" value={'thecheat'}>The Cheat</MenuItem>
                    <MenuItem className="menu-item" value={'mage'}>Mage</MenuItem>
                    <MenuItem className="menu-item" value={'oathsworn'}>Oathsworn</MenuItem>
                </Select>
                <FormHelperText>Class</FormHelperText>
            </FormControl>
            <FormControl className="bio-form-field">
                <TextField id="outlined-basic" variant="standard" />
                <FormHelperText>Weight</FormHelperText>
            </FormControl>
            <FormControl className="bio-form-field">
                <TextField id="outlined-basic" variant="standard" />
                <FormHelperText>Height</FormHelperText>
            </FormControl>
        </Box>
    )
};

export default FlavorBioEditor;