import React from "react";
import { ClassAbility } from "../../../../data/abilities";

interface ClassAbilityDisplayProps {
    ability: ClassAbility | null;
}

const ClassAbilityDisplay: React.FC<ClassAbilityDisplayProps> = ({ ability: classAbility }) => {
    if (!classAbility) return null;

    return (
        <div className='class-ability-display'>
            <div>
                <h4>Level: {classAbility.level}</h4>
                {classAbility.action.has &&
                    <h4>Action: {classAbility.action.count} </h4>
                }
                {classAbility.reaction.has &&
                    <h4>Action: {classAbility.reaction.count}</h4>
                }
            </div>
            <h4 className="ability-title">{classAbility.name}</h4>
            <p className="ability-text">{classAbility.text}</p>
        </div>
    )
};

export default ClassAbilityDisplay;