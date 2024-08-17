import React, {useContext} from "react";
import { DiceRollerContext } from "../../../context/DiceRollerContext";
import { TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

function DiceTypeSelector() {
    const diceContext = useContext(DiceRollerContext);
    if (!diceContext) return null;

    const diceOptions = [
        { label: 'd4', value: 4 },
        { label: 'd6', value: 6 },
        { label: 'd8', value: 8 },
        { label: 'd10', value: 10 },
        { label: 'd12', value: 12 },
        { label: 'd20', value: 20 },
        { label: 'd100', value: 100 }
    ]

    return (
        <>
            <h3>DICE & TYPE</h3>
            <div id="dice-type-number">
                <TextField
                    id="dice-number-input"
                    className="dice-input"
                    label="#"
                    type="number"
                    value={diceContext.diceAmount}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        min: 0
                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newValue = parseInt(e.target.value, 10);
                        diceContext.setDiceAmount(newValue);
                    }}
                />
                <FormControl variant="outlined" className="dice-input">
                    <InputLabel id="dice-type-label" className="dice-input" >Type</InputLabel>
                    <Select
                        labelId="dice-type-label"
                        id="dice-type-selector"
                        value={diceContext.diceType.toString()}
                        label="d20"
                        className="dice-input"
                        onChange={(e: SelectChangeEvent) => {
                            const newValue = parseInt(e.target.value, 10);
                            diceContext.setDiceType(newValue);
                        }}
                    >
                        {diceOptions.map(diceType => <MenuItem key={diceType.label} value={diceType.value}>{diceType.label}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        </>
    )
}

export default DiceTypeSelector;