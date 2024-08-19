interface Option {
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

const statIncreaseOptions: Record<string, Option> = {
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

const subclassAbilities: Record<string, ClassAbility> = {
    thickhide: {
        level: 3,
        name: 'Thick Hide',
        text: `When you enter your rage, gain Temp HP equal to your 
STR+DEX+your Berserker Level instead. `,
        action: false,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    },
    hibernate: {
        level: 3,
        name: 'Hibernate',
        text: `If you sleep for 24 consecutive hours, you to recover all levels of 
exhaustion (it must still be a safe place the GM designates).`,
        action: false,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    },
    feedingFrenzy: {
        level: 3,
        name: 'Feeding Frenzy',
        text: `While raging, the first time on your turn you cause an 
enemy to drop to 0 HP you may make an additional attack for free (with 1 
more stack of disadvantage).`,
        action: false,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    },
    keenNose: {
        level: 3,
        name: 'Keen Nose',
        text: `Advantage on perception checks to notice or track down scents.`,
        action: false,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    }
}

const subclasses: Record<string, Option> = {
    bearSpirit: {
        title: `Spirit of the Bear`,
        effect: '',
        value: 'bearspirit',
        abilities: [subclassAbilities.thickhide, subclassAbilities.hibernate]
    },
    wolfSpirit: {
        title: `Spirit of the Wolf`,
        effect: '',
        value: 'wolfspirit',
        abilities: [subclassAbilities.feedingFrenzy, subclassAbilities.keenNose]
    }
}

const savageArsenalAbility: Record<string, ClassAbility> = {
    intoTheFray: {
        level: 4,
        name: 'Into The Fray',
        text: `Action: Leap up to your speed toward an enemy. If you land adjacent 
to at least 2 enemies, make an attack against one of them for free.`,
        action: true,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    },
    deathBlow: {
        level: 4,
        name: 'Death Blow',
        text: `When your rage ends on a crit, apply your Fury Dice damage to the 
attack again.`,
        action: false,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    },
    mightyEndurance: {
        level: 4,
        name: 'Mighty Endurance',
        text: `You can now survive an additional 4 levels of exhaustion before 
death.`,
        action: false,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    },
    moreBlood: {
        level: 4,
        name: 'MORE BLOOD!',
        text: `When you score a critical hit you may continue to rage.2/Long Rest.`,
        action: false,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    },
    youreNext: {
        level: 4,
        name: `You're Next!`,
        text: `Action: While raging, you can make a skill check to demoralize an enemy 
within 60 ft. Rolling higher than their remaining HP will cause it to immediately flee 
the battle.`,
        action: true,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    },
    whirlwind: {
        level: 4,
        name: `Whirlwind`,
        text: `2 Actions: Damage ALL targets within your melee weapon’s reach.`,
        action: true,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    }
}

const savageArsenalAbilityOptions: Option[] = [
    {
        title: 'Into The Fray',
        effect: '',
        value: 'intothefray',
        abilities: [savageArsenalAbility.intoTheFray]
    },
    {
        title: 'Death Blow',
        effect: '',
        value: 'deathblow',
        abilities: [savageArsenalAbility.deathBlow]
    },
    {
        title: 'Mighty Endurance',
        effect: '',
        value: 'mightyendurance',
        abilities: [savageArsenalAbility.mightyEndurance]
    },
    {
        title: 'MORE BLOOD!',
        effect: '',
        value: 'moreblood',
        abilities: [savageArsenalAbility.moreBlood]
    },
    {
        title: `You're Next!`,
        effect: '',
        value: 'yourenext',
        abilities: [savageArsenalAbility.youreNext]
    },
    {
        title: 'Whirlwind',
        effect: '',
        value: 'whirlwind',
        abilities: [savageArsenalAbility.whirlwind]
    }
]


export const berserkerAbilities: ClassAbility[] = [
    {
        level: 1,
        name: 'Rage',
        text: `Action: Enter a rage. Your Armor is set to your STR+DEX, gain that 
much Temp HP. These effects end when your rage ends. Your rage is satiated 
and ends if you score a critical hit; when you drop to 0 HP; or if you go 1 round 
without dealing damage or entering your rage.`,
        action: true,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    },

    {
        level: 2,
        name: 'Intensifying Fury',
        text: `Action: Enter a rage. Your Armor is set to your STR+DEX, gain that 
much Temp HP. These effects end when your rage ends. Your rage is satiated 
and ends if you score a critical hit; when you drop to 0 HP; or if you go 1 round 
without dealing damage or entering your rage.`,
        action: true,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: true,
        upgrades: [
            {
                level: 5,
                name: '(2)',
                text: `Your Fury Die is now a d8. Roll your Fury Die when 
        you enter your rage for the first time during combat as well as at the end of 
        your subsequent turns. `,
                action: false,
                reaction: false,
                hasOptions: false,
                options: [],
                hasUpgrades: false,
                upgrades: []
            }
        ]
    },

    {
        level: 3,
        name: 'Subclass',
        text: `Choose an animalistic Berserker subclass.`,
        action: false,
        reaction: false,
        hasOptions: true,
        options: [subclasses.bearSpirit, subclasses.wolfSpirit],
        hasUpgrades: false,
        upgrades: []
    },

    {
        level: 4,
        name: 'Enduring Rage',
        text: `While Dying you enter your Rage automatically at the 
beginning of your turn, you also have a maximum of 2 Actions instead of 1, 
and ignore the STR save requirement to make attacks.`,
        action: false,
        reaction: false,
        hasOptions: false,
        options: [],
        hasUpgrades: false,
        upgrades: []
    },

    {
        level: 4,
        name: 'Savage Arsenal',
        text: `Learn 1 ability from the Savage Arsenal. If you perform 
a notable act of destruction or feat of strength during a Long Rest you may 
exchange 1 Savage Arsenal ability you know for a different one.`,
        action: false,
        reaction: false,
        hasOptions: false,
        options: savageArsenalAbilityOptions,
        hasUpgrades: false,
        upgrades: []
    },

    {
        level: 4,
        name: 'Key Stat Increase',
        text: '+1 STR or DEX.',
        action: false,
        reaction: false,
        hasOptions: true,
        options: [statIncreaseOptions.strength, statIncreaseOptions.dexterity],
        hasUpgrades: false,
        upgrades: []
    },

    {
        level: 5,
        name: 'Secondary Stat Increase',
        text: '+1 INT, WIS or CHA.',
        action: false,
        reaction: false,
        hasOptions: true,
        options: [statIncreaseOptions.intelligence, statIncreaseOptions.wisdom, statIncreaseOptions.charisma],
        hasUpgrades: false,
        upgrades: []
    }

];
