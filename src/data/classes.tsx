import { ARMOR, WEAPONTYPE, RESOURCEPOOL } from "./enums";
import { ClassAbility } from "./abilities";
import { berserkerAbilities } from "./classAbilities/berserker";
import { theCheatAbilities } from "./classAbilities/thecheat";
import { mageAbilities } from "./classAbilities/mage";
import { oathswornAbilities } from "./classAbilities/oathsworn";

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
        abilities: theCheatAbilities,
        spellcaster: false,
        spellSchool: [] 
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
        abilities: mageAbilities,
        spellcaster: true,
        spellSchool: ['fire', 'ice', 'lightning']
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
        abilities: oathswornAbilities,
        spellcaster: true,
        spellSchool: ['radiant']
    }

}



