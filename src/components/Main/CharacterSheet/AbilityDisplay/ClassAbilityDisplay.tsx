import React, { useContext } from "react";
import './ClassAbilityDisplay.css'
import { ClassAbility } from "../../../../data/abilities";
import { SelectedCharacterContext } from "../../../../context/SelectedCharacterContext";

interface ClassAbilityDisplayProps {
    ability: ClassAbility | null;
}

const ClassAbilityDisplay: React.FC<ClassAbilityDisplayProps> = ({ ability: classAbility }) => {
    const charContext = useContext(SelectedCharacterContext);
    if (!classAbility) return null;
    if(!charContext) return null;

    return (
        <div className='class-ability-display'>
            <div className='level-action-display'>
                <div className="name-action-box">
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

            {classAbility.hasUpgrades &&
                classAbility.upgrades.map(a => {
                    if(a.level <= charContext.state.flavorBio.classes[0].level){
                        return <ClassAbilityDisplay ability={a} />
                    }else{
                        return null;
                    }
                })
            }
        </div>
    )
};

export default ClassAbilityDisplay;