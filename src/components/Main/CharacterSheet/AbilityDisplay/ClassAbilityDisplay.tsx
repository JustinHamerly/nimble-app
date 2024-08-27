import React from "react";
import './ClassAbilityDisplay.css'
import { ClassAbility } from "../../../../data/abilities";

interface ClassAbilityDisplayProps {
    ability: ClassAbility | null;
}

const ClassAbilityDisplay: React.FC<ClassAbilityDisplayProps> = ({ ability: classAbility }) => {
    if (!classAbility) return null;

    return (
        <div className='class-ability-display'>
            <div className='level-action-display'>
                <h4 className="ability-title">{classAbility.name}</h4>
                {(classAbility.level > 0) &&
                    <h6>Level: {classAbility.level}</h6>
                }
                {(classAbility.action.has && classAbility.action.count > 0) && 
                    <h6>Action: {classAbility.action.count} </h6>
                }
                {classAbility.reaction.has &&
                    <h6>Action: {classAbility.reaction.count}</h6>
                }
            </div>
            <div className="ability-text-box">
                <p className="ability-text">{classAbility.text}</p>
            </div>
        </div>
    )
};

export default ClassAbilityDisplay;