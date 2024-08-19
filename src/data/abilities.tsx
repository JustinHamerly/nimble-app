export interface Option {
    title: string;
    effect: string;
    value: string;
    abilities: ClassAbility[]
}

export interface ClassAbility {
    level: number;
    name: string;
    text: string;
    action: boolean;
    reaction: boolean;
    hasOptions: boolean;
    options: Option[];
    hasUpgrades: boolean,
    upgrades: ClassAbility[]
}

export const statIncreaseOptions: Record<string, Option> = {
    strength: {
        title: 'INCREASE',
        effect: '+1 STR',
        value: 'str',
        abilities: []
    },
    dexterity: {
        title: 'INCREASE',
        effect: '+1 DEX',
        value: 'dex',
        abilities: []
    },
    intelligence: {
        title: 'INCREASE',
        effect: '+1 INT',
        value: 'int',
        abilities: []
    },
    wisdom: {
        title: 'INCREASE',
        effect: '+1 WIS',
        value: 'wis',
        abilities: []
    },
    charisma: {
        title: 'INCREASE',
        effect: '+1 CHA',
        value: 'cha',
        abilities: []
    }
}

