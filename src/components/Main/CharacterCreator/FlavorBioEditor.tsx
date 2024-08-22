import React, { useContext, useState } from "react";
import './FlavorBioEditor.css'
import { raceInfo, RaceInterface } from "../../../data/races";
import { SelectedCharacterContext } from "../../../context/SelectedCharacterContext";
import { Box, Button, FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";

function FlavorBioEditor() {

    const charContext = useContext(SelectedCharacterContext);
    const [race, setRace] = useState(charContext?.state.flavorBio.race || '');
    const [charClass, setCharClass] = useState(charContext?.state.flavorBio.classes[0].name || '');
    const [charName, setCharName] = useState(charContext?.state.flavorBio.name || '');
    const [weight, setWeight] = useState(charContext?.state.flavorBio.weight || '');
    const [height, setHeight] = useState(charContext?.state.flavorBio.height || '');

    const [selectedRaceInfo, setSelectedRaceInfo] = useState<RaceInterface>({
        name: '', 
        size: '', 
        description: '',
        ability: {
            name: '',
            description: ''
        }
    });

    if (!charContext) return null;

    const { dispatch } = charContext;

    const handleFlavorChange = () => {
        dispatch({
            type: 'SET_FLAVOR_BIO',
            payload: {
                name: charName,
                race: race,
                classes: [{ name: charClass, level: 1 }],
                weight: weight,
                height: height
            }
        })

        //get race info and traits and add the traits to the traits section
        //get class info.  update class saves/traits/abilities
    }

    const handleRaceChange = (e: SelectChangeEvent) => {
        const race = e.target.value;
        setRace(race);
        if (raceInfo[race]){
            setSelectedRaceInfo(raceInfo[race]);
        }
    }

    return (
        <div id='flavor-bio-editor-control'>
            <Box
                component='form'
                autoComplete="off"
                noValidate
                id="flavor-bio-editor"
                className="flavor-box"
            >
                <FormControl className="bio-form-field">
                    <TextField id="name-field" variant="standard" value={charName} onChange={(e) => setCharName(e.target.value)} />
                    <FormHelperText>Name</FormHelperText>
                </FormControl>
                <FormControl className="bio-form-field">
                    <Select
                        id="race-select"
                        value={race}
                        variant="standard"
                        onChange={handleRaceChange}
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
                        onChange={(e: SelectChangeEvent) => setCharClass(e.target.value)}
                    >
                        <MenuItem className="menu-item" value={'berserker'}>Berserker</MenuItem>
                        <MenuItem className="menu-item" value={'thecheat'}>The Cheat</MenuItem>
                        <MenuItem className="menu-item" value={'mage'}>Mage</MenuItem>
                        <MenuItem className="menu-item" value={'oathsworn'}>Oathsworn</MenuItem>
                    </Select>
                    <FormHelperText>Class</FormHelperText>
                </FormControl>
                <FormControl className="bio-form-field">
                    <TextField id="weight-field" variant="standard" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    <FormHelperText>Weight</FormHelperText>
                </FormControl>
                <FormControl className="bio-form-field">
                    <TextField id="height-field" variant="standard" value={height} onChange={(e) => setHeight(e.target.value)} />
                    <FormHelperText>Height</FormHelperText>
                </FormControl>

                <Button id="change-flavor-button" onClick={handleFlavorChange}>SAVE</Button>
            </Box>
            <div id='bio-info-preview-box' className="flavor-box">
                <div id="race-info">
                    <h3>{selectedRaceInfo.name} ({selectedRaceInfo.size})</h3>
                    <h3>{selectedRaceInfo.description}</h3>
                    <h3>{selectedRaceInfo.ability.name} {selectedRaceInfo.ability.description}</h3>
                </div>
                <div id="class-info">

                </div>
            </div>
        </div>
    )
};

export default FlavorBioEditor;