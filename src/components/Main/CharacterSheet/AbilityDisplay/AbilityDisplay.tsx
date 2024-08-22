import React, { useContext, useEffect, useState } from "react";
import './AbilityDisplay.css'
import { AbilitiesContext } from "../../../../context/AbilitiesContext";
import ClassAbilityDisplay from "./ClassAbilityDisplay";
import { ClassAbility } from "../../../../data/abilities";

function AbilityDisplay() {
    const abilitiesContext = useContext(AbilitiesContext);
    const [abilities, setAbilities] = useState<{
        action: ClassAbility[];
        reaction: ClassAbility[];
        passive: ClassAbility[];
    }>({
        action: [],
        reaction: [],
        passive: []
    });

    useEffect(() => {
        if (!abilitiesContext) return;
        const { classAbilities } = abilitiesContext.state;
        
        const categorizedAbilities = classAbilities.reduce((acc, ability) => {
            if (ability.action.has) {
                acc.action.push(ability);
            } else if (ability.reaction.has) {
                acc.reaction.push(ability);
            } else {
                acc.passive.push(ability);
            }
            return acc;
        }, {
            action: [] as ClassAbility[],
            reaction: [] as ClassAbility[],
            passive: [] as ClassAbility[]
        });

        setAbilities(categorizedAbilities);
        
    }, [abilitiesContext]);

    if (!abilitiesContext) return null;
    


    return (
        <>
            <section className='ability-display'>
                {abilities.action.map(ability => <ClassAbilityDisplay ability={ability} />)}
            </section>
            <section className='ability-display'>
                {abilities.reaction.map(ability => <ClassAbilityDisplay ability={ability} />)}
            </section>
            <section className='ability-display'>
                {abilities.passive.map(ability => <ClassAbilityDisplay ability={ability} />)}
            </section>
        </>
    )
};

export default AbilityDisplay;
