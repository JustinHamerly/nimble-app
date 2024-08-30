import { ClassAbility, createAbility, defaultAction, defaultLimit, Limiter, Choice, AbilityChoice, SubclassChoice } from "../abilities";

export const oathswornAbilities: ClassAbility[] = [
    createAbility(
        1,
        'Judgment Dice',
        `Whenever an enemy attacks you, gain a d8 Judgment Die. When you make a melee attack, expend all of your Judgment Dice. If the attack hits, deal additional radiant damage equal to the sum rolled. The maximum number of Judgment Dice you can have is equal to your CHA.`,
        'oathsworn',
        defaultAction,
        defaultAction,
        defaultLimit,
        true,
        [

            createAbility(
                5,
                'Judgement Die (2)',
                `Whenever you are attacked, gain 2 Judgment Dice instead of 1`
            )

        ]
    ),
    
    createAbility(
        1,
        'Lay on Hands',
        `Gain a magical pool of healing power equal to 5x your Oathsworn level. Action: Touch a target and restore HP equal to the healing power spent. Recharges on a Long Rest`,
        'oathsworn',
        {has: true, count: 1}
    ),

    createAbility(
        2,
        'Condemning Strike',
        `When you expend your Judgment Dice, you can spend Mana to roll an additional Judgment Dice for each Mana spent (up to the tier of spells you have unlocked). This can increase your Judgment Dice beyond your natural maximum.`,
        'oathsworn'
    ),

    createAbility(
        2,
        'Paragon of Virtue',
        `Advantage on Influence checks to convince someone when you are forthrighty telling the truth;  Disadvantage when misleading.`,
        'oathsworn'
    ),

    createAbility(
        3,
        'Sacred Decree',
        `Learn 1 Sacred Decree at levels 3, 6, 9, 12, 14 and 16. Whenever you perform a selfless act during a Long Rest, you may exchange one you know for a different one.`,
        'oathsworn'
    ),

    createAbility(
        4,
        'My Life, for My Friends',
        `You can interpose for free.`,
        'oathsworn'
    ),
    
    createAbility(
        18,
        'Unending Judgement',
        `You always have at least 1 Judgment Die.`,
        'oathsworn'
    ),

    createAbility(
        20,
        'Epic Oathsworn',
        `Increase any two of your stats by 1. Whenever you Interpose, you may Defend for free.`,
        'oathsworn'
    )

];

const oathOfVengeanceSubclassAbilities: ClassAbility[] = [
    createAbility(
        3,
        'Aura of Zeal',
        `Double the maximum number of Judgment Dice you can have. You gain an aura with a radius of 20 ft. When you or an ally within your aura receives a critical hit gain 2 Judgment Dice.`,
        'oath of vengeance'
    ),
    createAbility(
        7,
        'Avenger',
        `Whenever you or an ally within your Aura gains the Dying condition, gain 2 Judgment Dice`,
        'oath of vengeance'
    ),
    createAbility(
        11,
        'Unerring Judgment',
        `Whenever you would roll a 1 while you have any Judgment Dice, reroll the attack`,
        'oath of vengeance'
    ),
    createAbility(
        15,
        'Maximum Judgment',
        `Your Judgment Die is now a d12.`,
        'oath of vengeance'
    )
];

const oathOfRefugeSubclassAbilities: ClassAbility[] = [
    createAbility(
        3,
        'Aura of Refuge',
        `You gain +2 Armor while wearing a shield. You gain an aura with a radius of 20 ft., and can Interpose for an ally anywhere within your aura.`,
        'oath of refuge'
    ),
    createAbility(
        7,
        'Face Me, Foul Creature!',
        `When you Interpose, the attacking enemy is also Taunted until the end of their next turn.`,
        'oath of refuge'
    ),
    createAbility(
        11,
        'Glorious Reprieve',
        `When an ally within your aura would gain any Wounds or fail a saving throw, you may suffer the effect instead.  Gain 2 maximum Wounds.`,
        'oath of refuge'
    ),
    createAbility(
        15,
        'Divine Grace',
        `You are resistant to all damage while interposing`,
        'oath of refuge'
    )
];

const sacredDecreeAbilities: ClassAbility[] = [
    createAbility(
        0,
        'Blinding Aura',
        `Action: Enemies within your aura are Blinded until the end of their next turn. 1/Long Rest.`,
        'sacred decree',
        {
            has: true,
            count: 1
        },
        defaultAction,
        {
            has: true,
            count: 1,
            limiter: Limiter.LONGREST
        }
    ),
    createAbility(
        0,
        'Courage!',
        `When you or any ally within your aura would gain the Dying condition they are set to 1 HP instead. 1/encounter.`,
        'sacred decree',
        defaultAction,
        defaultAction,
        {
            has: true,
            count: 1,
            limiter: Limiter.ENCOUNTER
        }
    ),
    createAbility(
        0,
        'Explosive Judgement',
        `3 Actions: Expend all of your Judgment Dice, deal that much radiant damage to all enemies within your aura. 1/Encounter.`,
        'sacred decree',
        {has: true, count: 3},
        defaultAction,
        {has: true, count:1, limiter: Limiter.ENCOUNTER}
    ),
    createAbility(
        0,
        'Improved Aura',
        `Your aura increases to a 30 ft radius`,
        'sacred decree'
    ),
    createAbility(
        0,
        'Radiant Aura',
        `Action: End any single harmful condition or effect on yourself or another willing creature within your aura. You can use this feature CHA times/Long Rest.`,
        'sacred decree',
        {has: true, count: 1},
        defaultAction,
        {has: true, count: 0, limiter: Limiter.LONGREST, altCountAbilityString: 'cha' }
    ),
    createAbility(
        0,
        'Reliable Justice',
        `At the start of your turn gain 1 Judgment Die.`,
        'sacred decree'
    ),
    createAbility(
        0,
        'Shining Mandate',
        `Whenever you would gain a Judgment Die beyond your maximum, you may give it to an ally within your aura instead.  You have advantage on skill checks to see through illusions.`,
        'sacred decree'
    ),
    createAbility(
        0,
        'Stand Fast, Friends!',
        `Whenever you roll initiative, grant allies Temp HP equal to your STR + CHA.  You and allies within your aura have advantage against fear, and effects that would move or knock prone.`,
        'sacred decree'
    ),
    createAbility(
        0,
        'Unstoppable Protector',
        `Gain +5 ft. speed. You may Interpose even if you are restrained, stunned or otherwise incapacitated. If you Interpose for a noncombatant NPC you may Interpose again this round.`,
        'sacred decree'
    ),
    createAbility(
        0,
        'Well Armored',
        `Whenever you Interpose, gain temp HP equal to your STR.`,
        'sacred decree'
    )
];

const keyStatIncreaseChoices: Choice = {
    name: 'Key Stat Increase',
    text: 'Increase Strength or Charisma at levels 4, 8, 12 and 16',
    levels: [4, 8, 12, 16],
    choices: ['str', 'cha']
};

const secondaryStatIncreaseChoices: Choice = {
    name: 'Secondary Stat Increase',
    text: 'Increase Dexterity, Intelligence or Wisdom at levels 5, 9, 13 and 17',
    levels: [5, 9, 13, 17],
    choices: ['dex', 'int', 'wis']
};

const sacredDecreeChoices: AbilityChoice = {
    name: 'Sacred Decree Abilities',
    text: `Learn 1 Sacred Decree. Whenever you perform a selfless act during a Long Rest, you may exchange one you know for a different one.`,
    levels: [3, 6, 9, 12, 14, 16],
    choices: ['Blinding Aura', 'Courage!', 'Explosive Judgement', 'Improved Aura', 'Radiant Aura', 'Reliable Justice', 'Shining Mandate', 'Stand Fast, Friends!', 'Unstoppable Protector', 'Well Armored'],
    abilities: sacredDecreeAbilities
};

const oathswornSubclassChoices: SubclassChoice = {
    name: 'Subclass',
    text: 'Commit yourself to an oath',
    levels: [3],
    choices: ['Oath of Vengeance', 'Oath of Refuge'],
    abilities: [oathOfVengeanceSubclassAbilities, oathOfRefugeSubclassAbilities]
}

const oathswornStatChoices = [keyStatIncreaseChoices, secondaryStatIncreaseChoices];

export const oathsworn = {
    abilities: oathswornAbilities,
    abilityChoices: sacredDecreeChoices,
    subclassChoices: oathswornSubclassChoices,
    statChoices: oathswornStatChoices
}