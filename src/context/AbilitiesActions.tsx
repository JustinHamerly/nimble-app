import { ClassAbility } from "../data/abilities"
import { berserker } from "../data/classAbilities/berserker";
import { mage } from "../data/classAbilities/mage";
import { oathsworn } from "../data/classAbilities/oathsworn";
import { thecheat } from "../data/classAbilities/thecheat";

const getAbilityActions = () => {
    const getClassSpellsByLevel = (charClass: string, level: number) => {
        if (!charClass || ! level) return [];

        let abilityList: ClassAbility[] = [];

        if(charClass === 'mage'){
            abilityList = mage.abilities;
        }else if(charClass === 'thecheat'){
            abilityList = thecheat.abilities;
        }else if(charClass === 'oathsworn'){
            abilityList = oathsworn.abilities;
        }else if(charClass === 'berserker'){
            abilityList = berserker.abilities;
        }

        let listToReturn = abilityList.filter(ability => ability.level <= level);
        return listToReturn;

    }

    return {
        getClassSpellsByLevel
    }
}

export default getAbilityActions;