import React, { useContext, useEffect, useState } from "react";
import './AbilityDisplay.css'
import { AbilitiesContext } from "../../../../context/AbilitiesContext";
import ClassAbilityDisplay from "./ClassAbilityDisplay";
import { ClassAbility, heroicAbilities } from "../../../../data/abilities";

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
        const { classAbilities, subClassAbilities, racialAbilities } = abilitiesContext.state;
        
        const abilities = [...heroicAbilities, ...racialAbilities, ...classAbilities, ...subClassAbilities];
        const categorizedAbilities = abilities.reduce((acc, ability) => {
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
                <h4>ACTIONS</h4>
                {abilities.action.map(ability => <ClassAbilityDisplay ability={ability} />)}
            </section>
            <section className='ability-display'>
                <h4>REACTIONS</h4>
                {abilities.reaction.map(ability => <ClassAbilityDisplay ability={ability} />)}
            </section>
            <section className='ability-display'>
                <h4>PASSIVES</h4>
                {abilities.passive.map(ability => <ClassAbilityDisplay ability={ability} />)}
            </section>
        </>
    )
};

export default AbilityDisplay;
