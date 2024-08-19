import { ARMOR, WEAPONTYPE, RESOURCEPOOL } from "./enums";
import { ClassAbility } from "./abilities";
import { berserkerAbilities } from "./classes/berserker";

interface ClassInterface {
    playerClassName: string;
    saveAdv: string;
    saveDis: string;
    armor: ARMOR[];
    weaponType: WEAPONTYPE[];
    hitDie: {
        type: string;
        startingHP: number;
    };
    keyStats: string[];
    abilities: ClassAbility[];
    additionalResourcePool: RESOURCEPOOL;
    spellcaster: boolean;
    spellSchool: string[];
}

type ClassInfoType = Record<string, ClassInterface>;

export const classInfo: ClassInfoType = {
    berserker: {
        playerClassName: 'Berserker',
        saveAdv: 'str',
        saveDis: 'will',
        armor: [],
        weaponType: [WEAPONTYPE.STR],
        hitDie: {
            type: 'd12',
            startingHP: 20
        },
        keyStats: ['str', 'dex'],
        abilities: berserkerAbilities,
        additionalResourcePool: RESOURCEPOOL.FURY,
        spellcaster: false,
        spellSchool: []
    },

}


