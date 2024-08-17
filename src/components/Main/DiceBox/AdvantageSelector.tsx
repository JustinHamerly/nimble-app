import React, { useContext } from "react";
import { TextField } from "@mui/material";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { DiceRollerContext } from "../../../context/DiceRollerContext";

function AdvantageSelector() {
    const diceContext = useContext(DiceRollerContext);
    if(!diceContext) return null;
    
    return (
        <>
            <h3>LEVELS OF ADV</h3>
            <div className="adv-disadv">

                <TextField
                    id="advantage-input"
                    className="dice-input"
                    label={<CaretUpOutlined style={{ color: '#007F00', marginLeft: '2px', fontSize:'35px' }} />}
                    type="number"
                    value={diceContext.advantages}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newValue = parseInt(e.target.value, 10);
                        diceContext.setAdvantages(newValue);
                    }}
                    inputProps={{
                        min: 0
                    }}
                />
                <TextField
                    id="disadvantage-input"
                    className="dice-input"
                    label={<CaretDownOutlined style={{ color: '#CC0001', marginLeft: '2px', fontSize:'35px'  }} />}
                    type="number"
                    value={diceContext.disadvantages}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newValue = parseInt(e.target.value, 10);
                        diceContext.setDisadvantages(newValue);
                    }}
                    inputProps={{
                        min: 0
                    }}
                />
            </div>
        </>
    )
}

export default AdvantageSelector