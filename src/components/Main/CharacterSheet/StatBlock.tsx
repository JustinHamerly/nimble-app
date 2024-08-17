import React from 'react';
import './StatBlock.css';
import { statBlockDownArrow, statBlockUpArrow } from '../../tools/icons';
import { RollInfo } from '../../tools/interfaces';

interface StatBlockProps {
    rollInfo: RollInfo
}

function StatBlock({ rollInfo }: StatBlockProps) {
    const showAdvArrow = (rollInfo.advantages && rollInfo.advantages > 0);
    const showDisArrow = (rollInfo.disadvantages && rollInfo.disadvantages > 0)
    
    return (
        <div className="stat-block">
            <div className="stat-button-box">

                <h4 className="value">
                    {rollInfo.modifier}
                </h4>
                {/* <RollableButton 
                    diceType={diceInfo.diceType}
                    modifier={statValue}
                    advantage={diceInfo.advantage}
                    disadvantage={diceInfo.disadvantage}
                    diceAmount={diceInfo.diceAmount}
                /> */}
            </div>
            <h6>
                {rollInfo.name.toUpperCase()}
                {showAdvArrow ? statBlockUpArrow : null }
                {showDisArrow ? statBlockDownArrow : null }
                
            </h6>
            <h6 className="sub-name">
                {rollInfo.stat.toUpperCase()}
            </h6>
        </div>
    )
}

export default StatBlock;