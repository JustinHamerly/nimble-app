import { ClassAbility } from "../data/abilities"
import { berserkerAbilities } from "../data/classAbilities/berserker";
import { mageAbilities } from "../data/classAbilities/mage";
import { oathswornAbilities } from "../data/classAbilities/oathsworn";
import { theCheatAbilities } from "../data/classAbilities/thecheat";

const getAbilityActions = () => {
    const getClassSpellsByLevel = (charClass: string, level: number) => {
        if (!charClass || ! level) return [];

        let abilityList: ClassAbility[] = [];

        if(charClass === 'mage'){
            abilityList = mageAbilities;
        }else if(charClass === 'thecheat'){
            abilityList = theCheatAbilities;
        }else if(charClass === 'oathsworn'){
            abilityList = oathswornAbilities;
        }else if(charClass === 'berserker'){
            abilityList = berserkerAbilities;
        }

        let listToReturn = abilityList.filter(ability => ability.level <= level);
        return listToReturn;

    }

    return {
        getClassSpellsByLevel
    }
}

export default getAbilityActions;