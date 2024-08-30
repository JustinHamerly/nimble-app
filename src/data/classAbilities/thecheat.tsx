import { AbilityChoice, Choice, ClassAbility, createAbility, defaultAction, defaultLimit, Limiter, SubclassChoice } from "../abilities";

export const theCheatAbilities: ClassAbility[] = [
    createAbility(
        1,
        'Vicious Opportunist',
        `1/round. When you hit a distracted target, you may change the Primary Die roll to whatever you like (changing a die to the maximum value counts as a critical hit). Any target that cannot see you, is taunted by or adjacent to an ally is distracted.`,
        'the cheat'
    ),
    
    createAbility(
        1,
        'Sneak Attack',
        `The first critical hit you make each turn deals an additional 1d6 damage.`,
        'the cheat',
        defaultAction,
        defaultAction,
        defaultLimit,
        true,
        [

            createAbility(
                3,
                'Sneak Attack (2)',
                `Your sneak attack becomes 2d6.`,
                'the cheat'
            ),

            createAbility(
                5,
                'Sneak Attack (3)',
                `Your sneak attack becomes 3d6.`,
                'the cheat'
            ),

            createAbility(
                7,
                'Sneak Attack (4)',
                `Your sneak attack becomes 4d6`,
                'the cheat'
            ),

            createAbility(
                9,
                'Sneak Attack (5)',
                `Your sneak attack becomes 5d6`,
                'the cheat'
            ),

            createAbility(
                11,
                'Sneak Attack (6)',
                `Your sneak attack becomes 6d6`,
                'the cheat'
            ),

            createAbility(
                13,
                'Sneak Attack (7)',
                `Your sneak attack becomes 7d6`,
                'the cheat'
            ),

            createAbility(
                15,
                'Sneak Attack (8)',
                `Your sneak attack becomes 8d6`,
                'the cheat'
            ),

            createAbility(
                17,
                'Sneak Attack (9)',
                `Your sneak attack becomes 9d6`,
                'the cheat'
            ),

            createAbility(
                19,
                'Sneak Attack (10)',
                `Your sneak attack becomes 10d6`,
                'the cheat'
            ),

        ]
    ),

    createAbility(
        2,
        'Cheat',
        `You're a well-rounded cheater. Gain the following abilities:
            •  Once each round you may either Move or Hide for free.
            •  If you roll less than 10 on initiative, you may change it to 10 instead. 
            •  If you roll less than 10 on a skill check you may change it to 10. 1/day. 
            •  You may choose to have advantage on skill checks while playing any games, competitions, or placing wagers. If you're caught though...`,
        'the cheat',
        defaultAction,
        defaultAction,
        {has: true, count: 1, limiter: Limiter.DAY}
    ),

    createAbility(
        3,
        `Thieve's Cant`,
        `You learn the secret language of rogues and scoundrels`,
        'the cheat'
    ),

    createAbility(
        4,
        'Underhanded Ability',
        `Choose an underhanded ability every other level starting at 4 and ending at 18. If you spend a night talking shop with other roguish types you can exchange one ability for another.`,
        'the cheat'
    ),

    createAbility(
        5,
        'Quick Read',
        `Gain advantage on your first Assess check every encounter. Gain advantage on a the first Insight check you make with NPCs.`,
        'the cheat'
    ),

    createAbility(
        20,
        'Supreme Execution',
        `Increase any two of your stats by 1.  When you attack with a blade, if the attack does not miss, it counts as a crit`,
        'the cheat'
    )

];

const assassinSubclassAbilities: ClassAbility[] = [
    createAbility(
        3,
        'Silent Takedown',
        `If a creature dies from your sneak attack, you may turn invisible until you attack again or the end of your next turn.`,
        'assassin'
    ),
    createAbility(
        3,
        'Leave No Trace',
        `Advantage on stealth checks when you are at full health.`,
        'assassin'
    ),
    createAbility(
        7,
        'Master Assassin',
        `If you do not already know the Twist the Blade ability, you learn it.  If you already know it, you can perform it twice per encounter.  When you use this ability, if your target saves, the charge is nto spent`,
        'assassin'
    ),
    createAbility(
        11,
        'Professional Skulker',
        `Gain a climbing speed.  You have advantage on all Stealth checks`,
        'assassin'
    ),
    createAbility(
        15,
        'KILL',
        `When you would land a critical hit against an enemy with fewer maximum HP than you, it dies.`,
        'assassin'
    )
];

const scoundrelSubclassAbilities: ClassAbility[] = [
    createAbility(
        3,
        'Low Blow',
        `When you sneak attack, you may spend 2 Actions to Incapacitate your target for their next turn on a failed STR save (DC 10+DEX). Save or fail, they are taunted by you for the remainder of the encounter.`,
        'scoundrel',
        {has: true, count: 2}
    ),
    createAbility(
        3,
        'Sweet Talk',
        `You may gain advantage on all Influence checks with characters you've just met. This lasts until you fail an influence check with them or until you meet a 2nd time. Disadvantage on Influence checks with them after you use this ability.`,
        'scoundrel'
    ),
    createAbility(
        7,
        'Deep Pockets',
        `If you do not know the Pocket Sand ability, you learn it and your sand also blinds the target until the end of their next turn.  If you already know it, you may use it twice per encounter`,
        'scoundrel'
    ),
    createAbility(
        11,
        'Escape Plan',
        `When you would drop to 0 HP, you instead turn invisible for 1 minute or until you attack.  1/Long Rest`,
        'scoundrel',
        defaultAction,
        defaultAction,
        {has: true, count: 1, limiter: Limiter.LONGREST}
    )
];

const underhandedAbilities: ClassAbility[] = [
    createAbility(
        0,
        'Pocket Sand',
        `When you Defend against a melee attack, force the attacker to reroll the attack and impose disadvantage on all their attacks this round. 1/encounter (you've got to collect more sand!).`,
        'underhanded ability',
        defaultAction,
        defaultAction,
        {has: true, count: 1, limiter: Limiter.INITIATIVE}
    ),
    createAbility(
        0,
        `I'm Outta Here!`,
        `When an ally within 15 ft is critically hit, you may move up to half your speed and turn invisible until the end of your next turn.`,
        'underhanded ability',
    ),
    createAbility(
        0,
        'Feinting Attack',
        `If you would miss for the second time in a single round, you may change the die roll to its maximum instead.`,
        'underhanded ability',
    ),
    createAbility(
        0,
        'Twist the Blade',
        `When you land a sneak attack, you may force the target to make a STR save (DC 10+CHA). On a failure, instead of rolling your sneak attack dice, they deal the maximum amount of damage. 1/encounter.`,
        'underhanded ability',
        defaultAction,
        defaultAction,
        {has: true, count: 1, limiter: Limiter.INITIATIVE}
    ),
    createAbility(
        0,
        'Uncanny Dodge',
        `Add your CHA to your Armor.  When using the Defend reaction, you may reduce it by your Armor or halve the damage instead.`,
        'underhanded ability'
    ),
    createAbility(
        0,
        'Sunder Armor (Medium)',
        `Action: When you critically hit an enemy with medium armor, sunder their armor.  Until the start of your next turn, attacks against that target ignore its armor.`,
        'underhanded ability',
        {has: true, count: 1}
    ),
    createAbility(
        0,
        'Sunder Armor (Heavy)',
        `Requires: Sunder Armor(Medium).  Your Sunder Armor ability now also applies to enemies wearing heavy armor.`,
        'underhanded ability'
    ),
    createAbility(
        0,
        'Steal Tempo',
        `When you land a critical hit for the second time on your turn, your target is dazed and you gain 1 action.`,
        'underhanded ability'
    ),
    createAbility(
        0,
        'Trickshot',
        `When you throw a dagger, if it hits, it ricochets to another creature within 10 ft. dealing half as much damage to them.  Your dagger magically teleports back to yoru hand at the end of your turn.`,
        'underhanded ability'
    ),
    createAbility(
        0,
        'Exploit Weakness',
        `Action: Make a contested Insight check against an enemy.  If you win, any attack you land against them is a critical hit.  This lasts for 1 minute or until you use this ability against another target.`,
        'underhanded ability'
    ),
    createAbility(
        0,
        'Shadow Strike',
        `2 Actions: Teleport up to 20 ft. away to a place you can see and make a melee attack. If you crit, you may teleport again.`,
        'underhanded ability',
        {has: true, count: 2}
    )
];

const keyStatIncreaseChoices: Choice = {
    name: 'Key Stat Increase',
    text: 'Increase Dexterity or Charisma at levels 4, 8, 12 and 16',
    levels: [4, 8, 12, 16],
    choices: ['dex', 'cha']
};

const secondaryStatIncreaseChoices: Choice = {
    name: 'Secondary Stat Increase',
    text: 'Increase Intelligence, Wisdom or Strength at levels 5, 9, 13 and 17',
    levels: [5, 9, 13, 17],
    choices: ['int', 'wis', 'str']
};

const theCheatStatChoices = [keyStatIncreaseChoices, secondaryStatIncreaseChoices];

const underhandedAbilityChoices: AbilityChoice = {
    name: 'Underhanded Ability',
    text: 'Choose or Change Underhanded Abilities',
    levels: [4, 6, 8, 10, 12, 14, 16, 18],
    choices: ['Pocket Sand', `I'm Outta Here!`, 'Feinting Attack', 'Twist the Blade', 'Uncanny Dodge', 'Sunder Armor (Medium)', 'Sunder Armor (Heavy)', 'Steal Tempo', 'Trickshot', 'Exploit Weakness', 'Shadow Strike'],
    abilities: underhandedAbilities
},

const theCheatSubclassChoices: SubclassChoice = {
    name: 'Subclass',
    text: 'Choose a Cheat subclass',
    levels: [3],
    choices: ['Assassin', 'Scoundrel'],
    abilities: [assassinSubclassAbilities, scoundrelSubclassAbilities]
},

export const thecheat = {
    abilities: theCheatAbilities,
    abilityChoices: underhandedAbilityChoices,
    subclassChoices: theCheatSubclassChoices,
    statChoices: theCheatStatChoices
}

