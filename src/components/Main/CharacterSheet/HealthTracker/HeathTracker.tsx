import React, { useContext } from 'react';
import './HealthTracker.css'
import { SelectedCharacterContext } from '../../../../context/SelectedCharacterContext';

function HealthTracker() {
    const charContext = useContext(SelectedCharacterContext);
    if (!charContext) return null;

    return (
        <section id="health-tracker-section">
            <div id="health-tracker">
                <h3>HEALTH</h3>
                <div className='display-block'>
                    <h4 className="value">{charContext.state.mechanicalStats.currentHP}</h4> <h4>/</h4> <h4 className='value'>{charContext.state.mechanicalStats.maxHP}</h4>
                </div>
            </div>
            <div id="temp-hp-tracker">
                <h3>TEMP</h3>
                <div className='display-block' id="display-block-temp">
                    <h4 className='value'>{charContext.state.mechanicalStats.tempHP}</h4>
                </div>
            </div>
            <div id="exhaustion-tracker">
                <h3>EXH.</h3>
                <div className='display-block'>
                    <h4 className="value">{charContext.state.mechanicalStats.currentExhaustion}</h4> <h4>/</h4> <h4 className='value'>{charContext.state.mechanicalStats.maxExhaustion}</h4>
                </div>
            </div>
        </section>
    )
};

export default HealthTracker;
