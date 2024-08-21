import { ClassAbility, createAbility, defaultAction, Option, statIncreaseOptions } from "../abilities";

const theCheatSubclassAbilities: Record<string, ClassAbility> = {
    silenttakedown: createAbility(
        3,
        'Silent Takedown',
        `If a creature dies from your sneak attack, you may turn invisible until you attack again or the end of your next turn.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),
    leavenotrace: createAbility(
        3,
        'Leave No Trace',
        `Advantage on stealth checks when you are at full health.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),
    lowblow: createAbility(
        3,
        'Low Blow',
        `When you sneak attack, you may spend 2 Actions to Incapacitate your target for their next turn on a failed STR save (DC 10+DEX). Save or fail, they are taunted by you for the remainder of the encounter.`,
        {has: true, count: 2},
        defaultAction,
        defaultAction
    ),
    sweettalk: createAbility(
        3,
        'Sweet Talk',
        `You may gain advantage on all Influence checks with characters you've just met. This lasts until you fail an influence check with them or until you meet a 2nd time. Disadvantage on Influence checks with them after you use this ability.`,
        defaultAction,
        defaultAction,
        defaultAction
    )
};

const theCheatSubclasses: Record<string, Option> = {
    assassin: {
        title: 'Assassin',
        effect: 'Gain the Silent Takedown and Leave No Trace abilities.',
        value: 'assassin',
        abilities: [theCheatSubclassAbilities.silenttakedown, theCheatSubclassAbilities.leavenotrace]
    },
    scoundrel: {
        title: 'Scoundrel',
        effect: 'Gain the Low Blow and Sweet Talk abilities',
        value: 'scoundrel',
        abilities: [theCheatSubclassAbilities.lowblow, theCheatSubclassAbilities.sweettalk]
    }
};

const underhandedAbility: Record<string, ClassAbility> = {
    pocketsand: createAbility(
        4,
        'Pocket Sand',
        `When you Defend against a melee attack, force the attacker to reroll the attack and impose disadvantage on all their attacks this round. 1/encounter (you've got to collect more sand!).`,
        defaultAction,
        defaultAction,
        {has: true, count: 1}
    ),
    imouttahere: createAbility(
        4,
        `I'm Outta Here!`,
        `When an ally within 15 ft is critically hit, you may move up to half your speed and turn invisible until the end of your next turn.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),
    feintingattack: createAbility(
        4,
        'Feinting Attack',
        `If you would miss for the second time in a single round, you may change the die roll to its maximum instead.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),
    twisttheblade: createAbility(
        4,
        'Twist the Blade',
        `When you land a sneak attack, you may force the target to make a STR save (DC 10+CHA). On a failure, instead of rolling your sneak attack dice, they deal the maximum amount of damage. 1/encounter.`,
        defaultAction,
        defaultAction,
        {has: true, count: 1}
    ),
    shadowstrike: createAbility(
        4,
        'Shadow Strike',
        `2 Actions: Teleport up to 20 ft. away to a place you can see and make a melee attack. If you crit, you may teleport again.`,
        {has: true, count: 2},
        defaultAction,
        defaultAction
    )
};

const underhandedAbilityOptions: Option[] = [
    {
        title: 'Pocket Sand',
        effect: '',
        value: 'pocketsand',
        abilities: [underhandedAbility.pocketsand]
    },
    {
        title: `I'm Outta Here!`,
        effect: '',
        value: 'imouttahere',
        abilities: [underhandedAbility.imouttahere]
    },
    {
        title: 'Feinting Attack',
        effect: '',
        value: 'feintingattack',
        abilities: [underhandedAbility.feintingattack],
    },
    {
        title: 'Twist the Blade',
        effect: '',
        value: 'twisttheblade',
        abilities: [underhandedAbility.twisttheblade]
    },
    {
        title: 'Shadow Strike',
        effect: '',
        value: 'shadowstrike',
        abilities: [underhandedAbility.shadowstrike]
    }
];

export const theCheatAbilities: ClassAbility[] = [
    createAbility(
        1,
        'Vicious Opportunist',
        `1/round. When you hit a distracted target, you may change the Primary Die roll to whatever you like (changing a die to the maximum value counts as a critical hit). Any target that cannot see you, is taunted by or adjacent to an ally is distracted.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),
    
    createAbility(
        1,
        'Sneak Attack',
        `The first critical hit you make each turn deals an additional 1d6 damage.`,
        defaultAction,
        defaultAction,
        defaultAction,
        false,
        [],
        true,
        [

            createAbility(
                3,
                'Sneak Attack (2)',
                `Your sneak attack becomes 2d6.`,
                defaultAction,
                defaultAction,
                defaultAction
            ),

            createAbility(
                5,
                'Sneak Attack (3)',
                `Your sneak attack becomes 3d6.`,
                defaultAction,
                defaultAction,
                defaultAction
            )

        ]
    ),

    createAbility(
        2,
        'Cheat',
        `You're a well-rounded cheater. Gain the following abilities:
            •Once each round you may either Move or Hide for free.
            •If you roll less than 10 on initiative, you may change it to 10 instead. 
            •If you roll less than 10 on a skill check you may change it to 10. 1/day. 
            •You may choose to have advantage on skill checks while playing any games, competitions, or placing wagers. If you're caught though...`,
        defaultAction,
        defaultAction,
        {has: true, count: 1}
    ),

    createAbility(
        3,
        'Subclass',
        'Choose a Cheat subclass',
        defaultAction,
        defaultAction,
        defaultAction,
        true,
        [theCheatSubclasses.assassin, theCheatSubclasses.scoundrel]
    ),

    createAbility(
        3,
        `Thieve's Cant`,
        `You learn the secret language of rogues and scoundrels`,
        defaultAction,
        defaultAction,
        defaultAction
    ),

    createAbility(
        4,
        'Cheat Sheet',
        `Choose an underhanded ability. If you spend a night talking shop with other roguish types you can exchange one ability for another.`,
        defaultAction,
        defaultAction,
        defaultAction,
        true,
        underhandedAbilityOptions
    ),

    createAbility(
        4,
        'Key Stat Increase',
        '+1 DEX or CHA.',
        defaultAction,
        defaultAction,
        defaultAction,
        true,
        [statIncreaseOptions.dexterity, statIncreaseOptions.charisma]
    ),

    createAbility(
        5,
        'Quick Read',
        `Gain advantage on your first Assess check every encounter. Gain advantage on a the first Insight check you make with NPCs.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),

    createAbility(
        5,
        'Secondary Stat Increase',
        '+1 INT, WIS or STR.',
        defaultAction,
        defaultAction,
        defaultAction,
        true,
        [statIncreaseOptions.intelligence, statIncreaseOptions.wisdom, statIncreaseOptions.strength]
    )

]