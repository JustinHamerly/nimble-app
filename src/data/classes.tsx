import { ARMOR, WEAPONTYPE, RESOURCEPOOL } from "./enums";

interface classAbility {
    level: number;
    name: string;
    text: string;
}

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
    abilities: Record<string, classAbility>;
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
        abilities: {},
        additionalResourcePool: RESOURCEPOOL.FURY,
        spellcaster: false,
        spellSchool: []
    }
}