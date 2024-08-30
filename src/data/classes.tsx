import { ARMOR, WEAPONTYPE, RESOURCEPOOL } from "./enums";
import { ClassAbility } from "./abilities";
import { berserker } from "./classAbilities/berserker";
import { thecheat } from "./classAbilities/thecheat";
import { mage } from "./classAbilities/mage";
import { oathsworn } from "./classAbilities/oathsworn";

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
    additionalResourcePool?: RESOURCEPOOL;
    spellcaster?: boolean;
    spellSchool?: string[];
    spellLevels?: number[];
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
        abilities: berserker.abilities,
        additionalResourcePool: RESOURCEPOOL.FURY,
    },

    thecheat: {
        playerClassName: 'The Cheat',
        saveAdv: 'dex',
        saveDis: 'str',
        armor:[ARMOR.LEATHER],
        weaponType: [WEAPONTYPE.DEX],
        hitDie: {
            type: 'd6',
            startingHP: 10
        },
        keyStats: ['dex', 'cha'],
        abilities: thecheat.abilities,
    },
    
    mage: {
        playerClassName: 'Mage',
        saveAdv: 'will',
        saveDis: 'str',
        armor: [ARMOR.ROBE],
        weaponType: [WEAPONTYPE.DAGGER, WEAPONTYPE.STAFF, WEAPONTYPE.WAND],
        hitDie: {
            type: 'd6',
            startingHP: 10
        },
        keyStats: ['int', 'wis'],
        abilities: mage.abilities,
        spellcaster: true,
        spellSchool: ['fire', 'ice', 'lightning'],
        spellLevels: [1,2,4,6,8,10,12,14,16,18]
    },

    oathsworn: {
        playerClassName: 'Oathsworn',
        saveAdv: 'str',
        saveDis: 'dex',
        armor: [ARMOR.LEATHER, ARMOR.PLATE, ARMOR.ROBE, ARMOR.SHIELD],
        weaponType: [WEAPONTYPE.STR],
        hitDie: {
            type: 'd10',
            startingHP: 17
        },
        keyStats: ['str', 'cha'],
        abilities: oathsworn.abilities,
        spellcaster: true,
        spellSchool: ['radiant'],
        spellLevels: []
    }

}



