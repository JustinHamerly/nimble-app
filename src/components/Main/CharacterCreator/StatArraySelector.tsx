import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

interface DropdownState {
    dropdown1: string,
    dropdown2: string,
    dropdown3: string,
    dropdown4: string,
    dropdown5: string
}


function StatArraySelector() {

    const standardStatArrayOptions: string[] = ['2', '2', '1', '0', '-1'];
    const balancedStatArrayOptions: string[] = ['2', '1', '1', '1', '0'];
    const minmaxStatArrayOptions: string[] = ['3', '1', '1', '0', '-2'];

    const [numsToUse, setNumsToUse] = useState(standardStatArrayOptions);

    const statOptions = ['str', 'dex', 'int', 'wis', 'cha'];

    const [selectedNumOptions, setSelectedNumOptions] = useState<DropdownState>({
        dropdown1: '',
        dropdown2: '',
        dropdown3: '',
        dropdown4: '',
        dropdown5: ''
    });

    const getAvailableOptions = (currentDropdown: keyof DropdownState): string[] => {
        const selected: string[] = Object.keys(selectedNumOptions)
            .filter(key => key !== currentDropdown)
            .map(key => selectedNumOptions[key as keyof DropdownState]);

        return numsToUse.filter(option => !selected.includes(option));
    };

    const handleStatDropdownChange = (e: SelectChangeEvent<string>, dropdown: keyof DropdownState): void => {
        setSelectedNumOptions({ ...selectedNumOptions, [dropdown]: e.target.value })
    }

    return (
        <div id="stat-array-selector">
            {
                statOptions.map(stat => (
                    <div id={stat + '-selector'}>
                        <h3>{stat}</h3>
                        {(numsToUse as Array<keyof DropdownState>).map((dropdown) => (
                            <FormControl key={dropdown} fullWidth margin="normal">
                                <InputLabel>{dropdown}</InputLabel>
                                <Select
                                    value={selectedNumOptions[dropdown]}
                                    onChange={(event) => handleStatDropdownChange(event, dropdown)}
                                    label={dropdown}
                                >
                                    {getAvailableOptions(dropdown).map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        ))}
                    </div>
                ))
            }

        </div>
    )
}

export default StatArraySelector;
