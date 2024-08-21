import { ClassAbility, statIncreaseOptions, Option, defaultAction, createAbility } from "../abilities";

const berserkerSubclassAbilities: Record<string, ClassAbility> = {
    thickhide: createAbility(
        3, 
        'Thick Hide', 
        `When you enter your rage, gain Temp HP equal to your STR+DEX+your Berserker Level instead.`, 
        defaultAction, 
        defaultAction
    ),
    hibernate: createAbility(
        3, 
        'Hibernate', 
        `If you sleep for 24 consecutive hours, you to recover all levels of exhaustion (it must still be a safe place the GM designates).`, 
        defaultAction, 
        defaultAction
    ),
    feedingFrenzy: createAbility(
        3, 
        'Feeding Frenzy', 
        `While raging, the first time on your turn you cause an enemy to drop to 0 HP you may make an additional attack for free (with 1 more stack of disadvantage).`, 
        defaultAction, 
        defaultAction
    ),
    keenNose: createAbility(
        3, 
        'Keen Nose', 
        `Advantage on perception checks to notice or track down scents.`, 
        defaultAction, 
        defaultAction
    )
}

const berserkerSubclasses: Record<string, Option> = {
    bearSpirit: {
        title: `Spirit of the Bear`,
        effect: '',
        value: 'bearspirit',
        abilities: [berserkerSubclassAbilities.thickhide, berserkerSubclassAbilities.hibernate]
    },
    wolfSpirit: {
        title: `Spirit of the Wolf`,
        effect: '',
        value: 'wolfspirit',
        abilities: [berserkerSubclassAbilities.feedingFrenzy, berserkerSubclassAbilities.keenNose]
    }
}

const savageArsenalAbility: Record<string, ClassAbility> = {
    intothefray: createAbility(
        4, 
        'Into The Fray', 
        `Action: Leap up to your speed toward an enemy. If you land adjacent to at least 2 enemies, make an attack against one of them for free.`, 
        { isAction: true, actionCount: 1 }, 
        defaultAction
    ),
    deathblow: createAbility(
        4, 
        'Death Blow', 
        `When your rage ends on a crit, apply your Fury Dice damage to the attack again.`, 
        defaultAction, 
        defaultAction
    ),
    mightyendurance: createAbility(
        4, 
        'Mighty Endurance', 
        `You can now survive an additional 4 levels of exhaustion before death.`, 
        defaultAction, 
        defaultAction
    ),
    moreblood: createAbility(
        4, 
        'MORE BLOOD!', 
        `When you score a critical hit you may continue to rage.2/Long Rest.`, 
        defaultAction, 
        defaultAction
    ),
    yourenext: createAbility(
        4, 
        `You're Next!`, 
        `Action: While raging, you can make a skill check to demoralize an enemy within 60 ft. Rolling higher than their remaining HP will cause it to immediately flee the battle.`, 
        { isAction: true, actionCount: 1 }, 
        defaultAction
    ),
    whirlwind: createAbility(
        4, 
        'Whirlwind', 
        `2 Actions: Damage ALL targets within your melee weapon's reach.`, 
        { isAction: true, actionCount: 2 }, 
        defaultAction
    )
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


const berserkerAbilities: ClassAbility[] = [
    createAbility(
        1, 
        'Rage', 
        `Action: Enter a rage. Your Armor is set to your STR+DEX, gain that much Temp HP. These effects end when your rage ends. Your rage is satiated and ends if you score a critical hit; when you drop to 0 HP; or if you go 1 round without dealing damage or entering your rage.`, 
        { isAction: true, actionCount: 1 }, 
        defaultAction
    ),

    createAbility(
        2, 
        'Intensifying Fury', 
        `At the end of each of your turns, if you are raging, roll 1d6 and set it aside; this is your Fury Die, add it to every attack you make. There is no limit to the number of Fury Dice you can accumulate this way. If your Rage ends, your Fury Dice are lost`, 
        defaultAction, 
        defaultAction, 
        false, 
        [], 
        true, 
        [
            createAbility(
                5, 
                'Intensifying Fury (2)', 
                `Your Fury Die is now a d8. Roll your Fury Die when you enter your rage for the first time during combat as well as at the end of your subsequent turns. `, 
                defaultAction, 
                defaultAction
            )
        ]
    ),

    createAbility(
        3, 
        'Subclass', 
        `Choose an animalistic Berserker subclass.`, 
        defaultAction, 
        defaultAction, 
        true, 
        [berserkerSubclasses.bearSpirit, berserkerSubclasses.wolfSpirit]
    ),

    createAbility(
        4, 
        'Enduring Rage', 
        `While Dying you enter your Rage automatically at the beginning of your turn, you also have a maximum of 2 Actions instead of 1, and ignore the STR save requirement to make attacks.`, 
        defaultAction, 
        defaultAction
    ),

    createAbility(
        4,
        'Savage Arsenal',
        `Learn 1 ability from the Savage Arsenal. If you perform a notable act of destruction or feat of strength during a Long Rest you may exchange 1 Savage Arsenal ability you know for a different one.`,
        defaultAction,
        defaultAction,
        true,
        savageArsenalAbilityOptions
    ),

    createAbility(
        4,
        'Key Stat Increase',
        '+1 STR or DEX.',
        defaultAction,
        defaultAction,
        true,
        [statIncreaseOptions.strength, statIncreaseOptions.dexterity]
    ),

    createAbility(
        5,
        'Secondary Stat Increase',
        '+1 INT, WIS or CHA.',
        defaultAction,
        defaultAction,
        true,
        [statIncreaseOptions.intelligence, statIncreaseOptions.wisdom, statIncreaseOptions.charisma]
    )

];

export { berserkerAbilities }