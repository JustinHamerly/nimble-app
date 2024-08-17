import React, { useContext } from "react";
import './DiceDisplay.css'
import { DiceRollerContext } from "../../../context/DiceRollerContext";
import { UpCircleOutlined, DownCircleOutlined } from "@ant-design/icons";

function DiceDisplay() {
    const diceContext = useContext(DiceRollerContext);
    if (!diceContext) return null;

    const displayAdvDis = diceContext.advantages !== diceContext.disadvantages;
    const displayRoll = diceContext.diceAmount > 0;
    const showAdv = diceContext.advantages > diceContext.disadvantages;
    const showDisadv = diceContext.disadvantages > diceContext.advantages;
    const totalToRemove = Math.abs(diceContext.advantages-diceContext.disadvantages)

    return (

        <section className="rolled-dice-box">
            {
                
                displayRoll &&
                <div id="roll-info">
                    <h4>Roll: {diceContext.diceAmount}d{diceContext.diceType}</h4>
                    {
                        showAdv && 
                        <h4>{totalToRemove}<UpCircleOutlined style={{ color: '#007F00', marginLeft: '2px' }} /> </h4>
                    }
                    {
                        showDisadv &&
                        <h4>{totalToRemove}<DownCircleOutlined style={{ color: '#CC0001', marginLeft: '2px' }} /></h4>
                    }
                </div>
            }
            {
                displayAdvDis &&
                <>
                    <h3>ROLLED</h3>
                    <div id="rolled-dice" className="dice-list">
                        {diceContext.rolledDice.map((num, i) => <div key={i} className="dice-outline">
                            <h4>{num}</h4>
                        </div>)}
                    </div>
                    <h3>REMOVED</h3>
                    <div id="removed-dice" className="dice-list">
                        {diceContext.removedDice.map((num, i) => <div key={i} className="dice-outline">
                            <h4>{num}</h4>
                        </div>)}
                    </div>
                </>
            }
            <h3>RESULTING</h3>
            <div id="resulting-dice" className="dice-list">
                {diceContext.diceResults.map((num, i) => <div key={i} className="dice-outline">
                    <h4>{num}</h4>
                </div>)}
            </div>
            <h3>TOTAL</h3>
            <div id="dice-total">
                <div id="total-outline">
                    <h4>{diceContext.diceResultTotal}</h4>
                </div>
            </div>
        </section>

    )
};

export default DiceDisplay;