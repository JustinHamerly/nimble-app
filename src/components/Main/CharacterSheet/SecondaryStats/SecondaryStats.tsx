import React, { useContext } from "react";
import './SecondaryStats.css'
import { SelectedCharacterContext } from "../../../../context/SelectedCharacterContext";

function SecondaryStats() {
    const charContext = useContext(SelectedCharacterContext);
    if (!charContext) return null;
    
    return (
        <section id="secondary-stats-section">
            <div id='armor-tracker'>
                <h3>ARMOR</h3>
                <div className='display-block-sm'>
                    <h4 className="value">{charContext.state.mechanicalStats.armor}</h4>
                </div>
            </div>
            <div id='speed-tracker'>
                <h3>SPEED</h3>
                <div className='display-block-sm'>
                    <h4 className="value">{charContext.state.mechanicalStats.armor}</h4>
                </div>
            </div>
            <div id='initiative-tracker'>
            <h3>INITIATIVE</h3>
                <div className='display-block-sm'>
                    <h4 className="value">{charContext.state.mechanicalStats.initiative}</h4>
                </div>
            </div>
        </section>
    )
};

export default SecondaryStats;
