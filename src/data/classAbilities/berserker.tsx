import { ClassAbility, defaultAction, createAbility, Limiter, defaultLimit, Choice, AbilityChoice, SubclassChoice } from "../abilities";

const berserkerAbilities: ClassAbility[] = [
    createAbility(
        1, 
        'Rage', 
        `Action: Enter a rage. Your Armor is set to your STR+DEX, gain that much Temp HP. These effects end when your rage ends. Your rage is satiated and ends if you score a critical hit; when you drop to 0 HP; or if you go 1 round without dealing damage or entering your rage.`, 
        'berserker',
        { has: true, count: 1 }
    ),

    createAbility(
        2, 
        'Intensifying Fury', 
        `At the end of each of your turns, if you are raging, roll 1d6 and set it aside; this is your Fury Die, add it to every attack you make. There is no limit to the number of Fury Dice you can accumulate this way. If your Rage ends, your Fury Dice are lost`, 
        'berserker',
        defaultAction, 
        defaultAction, 
        defaultLimit,
        true, 
        [
            createAbility(
                5, 
                'Intensifying Fury (2)', 
                `Your Fury Die is now a d8. Roll your Fury Die when you enter your rage for the first time during combat as well as at the end of your subsequent turns. `,
                'berserker'
            ),

            createAbility(
                9,
                'Intensifiying Fury (3)',
                `Your Fury Die is now a d10`,
                'berserker'
            ),

            createAbility(
                13,
                'Intensifying Fury (4)',
                'Your Fury Die is now a d12',
                'berserker'
            ),

            createAbility(
                13,
                'Intensifying Fury (5)',
                'Your fury Die is now a d20',
                'berserker'
            )
        ]
    ),

    createAbility(
        4, 
        'Enduring Rage', 
        `While Dying you enter your Rage automatically at the beginning of your turn, you also have a maximum of 2 Actions instead of 1, and ignore the STR save requirement to make attacks.`,
        'berserker'
    ),

    createAbility(
        4,
        'Savage Arsenal',
        `Learn 1 ability from the Savage Arsenal starting at level 4 and every other level up to 18. Whenever you perform a notable act of destruction or feat of strength during a Long Rest you may exchange 1 Savage Arsenal ability you know for a different one.`,
        'berserker'
    ),

    createAbility(
        19,
        'DEEP RAGE',
        `The Dying condition does not cause your rage to end.`,
        'berserker'
    ),

    createAbility(
        20,
        'BOUNDLESS RAGE',
        `Increase any two of your stats by 1.  Any time you roll less than 10 on your fury die, roll it again`,
        'berserker'
    )  
];

const bearSpiritSubclassAbilities: ClassAbility[] = [
    createAbility(
        3, 
        'Thick Hide', 
        `When you enter your rage, gain Temp HP equal to your STR+DEX+your Berserker Level instead.`,
        'spirit of the bear'
    ),
    createAbility(
        3, 
        'Hibernate', 
        `If you sleep for 24 consecutive hours, you to recover all levels of exhaustion (it must still be a safe place the GM designates).`,
        'spirit of the bear'
    ),
    createAbility(
        7,
        'Indomitable Fury',
        `While raging, if you would suffer your last Wound, you don't. 1/encounter`,
        'spirit of the bear',
        defaultAction,
        defaultAction,
        {
            has: true,
            limiter: Limiter.ENCOUNTER,
            count: 1
        }
    ),
    createAbility(
        11,
        'Angry Bear',
        `Whenever you miss an attack or whenever you would receive a critical hit, enter your rage for free (before damage is dealt).`,
        'spirit of the bear'
    ),
    createAbility(
        15,
        'Everlasting Bear',
        `While dying, you cannot be critically hit (if an attack against you would be a critical hit, the attack is rerolled instead.  This still triggers your Angry Bear feature).`,
        'spirit of the bear'
    )
];

const wolfSpiritSubclassAbilities: ClassAbility[] = [
    createAbility(
        3, 
        'Feeding Frenzy', 
        `While raging, the first time on your turn you cause an enemy to drop to 0 HP you may make an additional attack for free (with 1 more stack of disadvantage).`,
        'spirit of the wolf'
    ),
    createAbility(
        3, 
        'Keen Nose', 
        `Advantage on perception checks to notice or track down scents.`,
        'spirit of the wolf'
    ),
    createAbility(
        7,
        'Unerring Strike',
        `While raging, if you would miss an attack, you may gain 1 Wound to reroll the attack.`,
        'spirit of the wolf'
    ),
    createAbility(
        11,
        'Opportunistic Frenzy',
        `While raging, your opportunity attack do not impose disadvantage and you may make an opportunity attack when an enemy enters your weapon's reach.`,
        'spirit of the wolf'
    ),
    createAbility(
        15,
        `Leader of the Pack`,
        `While raging, gain +10ft speed and you may move for free 1/round`,
        'spirit of the wolf',
        defaultAction,
        defaultAction,
        {
            has: true,
            count: 1,
            limiter: Limiter.ROUND
        }
    )
];

const savageArsenalAbilities: ClassAbility[] = [
    createAbility(
        0,
        'Deathless Rage',
        `While dying, you may gain 1 Wound and 1 Action, 1/round`,
        'savage arsenal',
        defaultAction,
        defaultAction,
        {
            has: true,
            limiter: Limiter.ROUND,
            count: 1
        }
    ),
    createAbility(
        0,
        'Eager for Battle',
        `Gain advantage on Initiative.  +10ft. speed on your first turn each encounter`,
        'savage arsenal',
    ),
    createAbility(
        0, 
        'Into The Fray', 
        `Action: Leap up to your speed toward an enemy. If you land adjacent to at least 2 enemies, make an attack against one of them for free.`, 
        'savage arsenal',
        { has: true, count: 1 }
    ),
    createAbility(
        0, 
        'Death Blow', 
        `When your rage ends on a crit, apply your Fury Dice damage to the attack again.`,
        'savage arsenal'
    ),
    createAbility(
        0, 
        'Mighty Endurance', 
        `You can now survive an additional 4 levels of exhaustion before death.`,
        'savage arsenal'
    ),
    createAbility(
        0, 
        'MORE BLOOD!', 
        `When you score a critical hit you may continue to rage.2/Long Rest.`, 
        'savage arsenal',
        defaultAction, 
        defaultAction,
        {has: true, count: 2, limiter: Limiter.LONGREST}
    ),
    createAbility(
        0,
        'Primal Recovery',
        `Whenever you recover 10 or more HP at a time, recover 1 Wound.`,
        'savage arsenal'
    ),
    createAbility(
        0,
        'Swift Fury',
        `Whenever you enter your rage, you may move up to 5ft x DEX for free, ignoring difficult terrain.`,
        'savage arsenal'
    ),
    createAbility(
        0,
        'That All You Got?!',
        `While raging, taking damage while dying only inflicts 1 Wound, instead of 2;  critical hits while dying only inflict 2, instead of 3`,
        'savage arsenal'
    ),
    createAbility(
        0,
        'Thunderous Steps',
        `After moving at least 20ft. while raging, deal STR bludgeoning damage to all adjacent creatures where you stop.`,
        'savage arsenal'
    ),
    createAbility(
        0, 
        `You're Next!`, 
        `Action: While raging, you can make a skill check to demoralize an enemy within 60 ft. Rolling higher than their remaining HP will cause it to immediately flee the battle.`, 
        'savage arsenal',
        { has: true, count: 1 }
    ),
    createAbility(
        0, 
        'Whirlwind', 
        `2 Actions: Damage ALL targets within your melee weapon's reach.`, 
        'savage arsenal',
        { has: true, count: 2 }
    ),
    createAbility(
        0,
        'Rampage',
        `Action: Whenever you land a hit with a melee weapon, you may attack again using that roll instead of rolling again`,
        'savage arsenal',
        {
            has: true,
            count: 1
        }
    )
];

const keyStatIncreaseChoices: Choice = {
    name: 'Key Stat Increase',
    text: 'Increase Strength or Dexterity at levels 4, 8, 12 and 16',
    levels: [4, 8, 12, 16],
    choices: ['str', 'dex']
}

const secondaryStatIncreaseChoices: Choice = {
    name: 'Secondary Stat Increase',
    text: 'Increase Intelligence, Wisdom or Charisma at levels 5, 9, 13 and 17',
    levels: [5, 9, 13, 17],
    choices: ['int', 'wis', 'cha']
}

const berserkerStatChoices = [keyStatIncreaseChoices, secondaryStatIncreaseChoices];

const savageArsenalChoices: AbilityChoice = {
    name: 'Savage Arsenal',
    text: `Choose or Change Savage Arsenal Abilities`,
    levels: [4, 6, 8, 10, 12, 14, 16, 18],
    choices: ['Deathless Rage', 'Eager for Battle', 'Into the Fray', 'Death Blow', 'Mighty Endurance', 'MORE BLOOD!', 'Primal Recovery', 'Swift Fury', 'That All You Got?!', 'Thunderous Steps', `You're Next`, 'Whirlwind', 'Rampage'],
    abilities: savageArsenalAbilities
}

const berserkerSubclassChoices: SubclassChoice = {
    name: 'Subclass',
    text: `Choose an animalistic Berserker subclass.`,
    levels: [3],
    choices: ['Spirit of the Bear', 'Spirit of the Wolf'],
    abilities: [bearSpiritSubclassAbilities, wolfSpiritSubclassAbilities]
}

export const berserker =  { 
    abilities: berserkerAbilities,  
    abilityChoices: savageArsenalChoices,
    subclassChoices: berserkerSubclassChoices,
    statChoices: berserkerStatChoices
}