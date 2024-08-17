import React, { useContext } from "react";
import './DiceBox.css'
import { DiceRollerContext } from "../../../context/DiceRollerContext";

import DiceTypeSelector from "./DiceTypeSelector";
import AdvantageSelector from "./AdvantageSelector";



function DiceBox() {
    const diceContext = useContext(DiceRollerContext)
    if (!diceContext) return null

    
    return (
        <>
            <div className="dice-manual-settings">
                <DiceTypeSelector />
                <AdvantageSelector />

                <div className="buttons">
                    <div className="dice-button">
                        <h4 onClick={()=>diceContext.rollDice()}>ROLL</h4>
                    </div>
                    <div className="dice-button">
                        <div className="reset-button">
                            <h4 onClick={() => diceContext.reset()}>RESET</h4>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
        //final roll value display


    )
};

export default DiceBox;