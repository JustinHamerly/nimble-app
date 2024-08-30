import { AbilityChoice, Choice, ClassAbility, createAbility, defaultAction, defaultLimit, Limiter, SubclassChoice } from "../abilities";

const mageAbilities: ClassAbility[] = [
    
    createAbility(
        2,
        'Talented Researcher',
        `Gain advantage on Arcana or Lore checks when you have access to a large amount of books and at least 12 hours to study.`,
        'mage'
    ),

    createAbility(
        4,
        'Spellshaper',
        'You gain the ability to empower your spells with powerful effects by spending additional resources. You may use 1 Spell Shaper ability per turn. Choose 2 abilities at level 4, and one additional at level 9 and 13. You may exchange one ability for another whenever you are tutored by a higher level Mage during a Long Rest, and also at level 9 and 13 when gaining new Spellshaper Abilities.',
        'mage'
    ),

    createAbility(
        5,
        'Elemental Surge',
        'A surge of adrenaline and your affinity with the elements grants you additional power as combat begins.  When you roll intitative, roll 1d4 and regain that much mana (this expires at the end of combat if unused).',
        'mage',
        defaultAction,
        defaultAction,
        defaultLimit,
        true,
        [

            createAbility(
                10,
                'Elemental Surge (2)',
                `Your Elemental Surge ability is now 2d4+Wis instead.`,
                'mage'
            ),

            createAbility(
                17,
                'Elemental Surge (3)',
                `Your Elemental Surge ability is now 3d4+WIS instead.`,
                'mage'
            )

        ]
    ),

    createAbility(
        20,
        'Epic Mage',
        `Increase any two of your stats by 1.  The first tiered spell you cast each encounter costs 5 mana less.`,
        'mage'
    )

];

const mageOfControlSubclassAbilities: ClassAbility[] = [
    createAbility(
        3,
        'Demand Control',
        `Whenever you cast a Tiered spell, you may spend 1 additional Mana to Demand Control: choose 1 option from the Control Table. If the spell misses, you must Demand Control for free.`,
        'mage of control'
    ),
    createAbility(
        7,
        'At Any Cost',
        `Learn one cantrip and one tiered spell from the Necrotic school. You may change these whenever you Long Rest.`,
        'mage of control'
    ),
    createAbility(
        7,
        'Nullify',
        `Ignore all disadvantage and other negative effects on your next Action this turn. 1/Long Rest.`,
        'mage of control',
        defaultAction,
        defaultAction,
        {
            has: true,
            count: 1,
            limiter: Limiter.LONGREST
        }
    ),
    createAbility(
        11,
        'Steel Will',
        `Whenever you would fail a concentration check, you may succeed instead. 1/Long Rest. Whenever you roll a 1 on an Elemental Surge die, you may reroll it once.`,
        'mage of control',
        defaultAction,
        defaultAction,
        {
            has: true,
            count: 1,
            limiter: Limiter.LONGREST
        }
    ),
    createAbility(
        15,
        'Supreme Control',
        'You may trigger your Demand Control effects twice.',
        'mage of control'
    )
];

const mageOfChaosSubclassAbilities: ClassAbility[] = [

    createAbility(
        3,
        'Invoke Chaos',
        `Whenever you cast a Tiered spell, you may spend 1 additional Mana to Invoke Chaos:  roll on the Chaos Table.  If the spell is a critical hit, you must Invoke Chaos for free.`,
        'mage of chaos'
    ),

    createAbility(
        7,
        'Tempest Mage',
        `Learn one cantrip and one Tiered spell from the Wind school. You may change these whenever you Long Rest.`,
        'mage of chaos'
    ),

    createAbility(
        7,
        'Chaos Lash',
        `(Reaction, 1/ Encounter) When an enemy moves adjacent to you, they are pushed back 10 ft. and knocked prone on a failed WILL save.`,
        'mage of chaos',
        defaultAction,
        {
            has: true,
            count: 1
        },
        {
            has: true,
            count: 1,
            limiter: Limiter.ENCOUNTER
        }
    ),

    createAbility(
        11,
        'Thrive In Chaos',
        `Whenever you Invoke Chaos, you may roll twice and cause both effects. 1/Long Rest you may choose which roll to use instead.`,
        'mage of chaos',
        defaultAction,
        defaultAction,
        {
            has: true,
            count: 1,
            limiter: Limiter.LONGREST
        }
    ),

    createAbility(
        15,
        'Master of Chaos',
        'mage of chaos',
        'Whenever you Invoke Chaos, roll with advantage.'
    )

];

const spellshaperAbilities: ClassAbility[] = [
    createAbility(
        0,
        'Extra-Dimensional Vision',
        `(2 Mana) You may ignore the line of sight requirement of a spell. Your spell will phase though barriers and obstacles to reach a target you know of within range.`,
        'spellshaper'
    ),
    createAbility(
        0,
        'Stretch Time',
        `(2 Mana) Reduce the Action cost by 1.`,
        'spellshaper'
    ),
    createAbility(
        0,
        'Echo Casting',
        `(2x Mana). When you cast a tiered, single target spell, you may cast a copy of that spell on a 2nd target for free.`,
        'spellshaper'
    ),
    createAbility(
        0,
        'Elemental Destruction',
        `(1+ Mana) When you hit with a spell, you may spend 1 or more Mana (up to your WIS) to reroll any single die per Mana spent.`,
        'spellshaper'
    ),
    createAbility(
        0,
        'Dimensional Reach',
        `(1+ Mana) Increase the range of a spell by 30 ft. for each additional Mana.`,
        'spellshaper'
    ),
    createAbility(
        0,
        'Methodical Spellweaver',
        `(1 Action) Reduce the Mana cost of a spell by 2.`,
        'spellshaper'
    ),
    createAbility(
        0,
        'Elemental Transmutation',
        `(1 Mana) Change the damage type of the spell.`,
        'spellshaper'
    )
];

const keyStatIncreaseChoices: Choice = {
    name: 'Key Stat Increase',
    text: 'Increase Intelligence or Wisdom at levels 4, 8, 12 and 16',
    levels: [4, 8, 12, 16],
    choices: ['int', 'wis']
};

const secondaryStatIncreaseChoices: Choice = {
    name: 'Secondary Stat Increase',
    text: 'Increase Strength, Dexterity or Charisma at levels 5, 9, 13 and 17',
    levels: [5, 9, 13, 17],
    choices: ['str', 'dex', 'cha']
};

const spellshaperChoices: AbilityChoice = {
    name: 'Spellshaper',
    text: `Choose or Change Spellshaper Abilities`,
    levels: [4, 4, 9, 13],
    choices: ['Extra-Dimensional Vision', 'Stretch Time', 'Echo Casting', 'Elemental Destruction', 'Dimensional Reach', 'Methodical Spellweaver', 'Elemental Transmutation' ],
    abilities: spellshaperAbilities
};

const mageSubclassChoices: SubclassChoice = {
    name: 'Subclass',
    text: 'Choose a Mage subclass',
    levels: [3],
    choices: ['Mage of Control', 'Mage of Chaos'],
    abilities: [mageOfControlSubclassAbilities, mageOfChaosSubclassAbilities]
};

const mageStatChoices = [keyStatIncreaseChoices, secondaryStatIncreaseChoices];

export const mage = {
    abilities: mageAbilities,
    abilityChoices: spellshaperChoices,
    subclassChoices: mageSubclassChoices,
    statChoices: mageStatChoices,
}