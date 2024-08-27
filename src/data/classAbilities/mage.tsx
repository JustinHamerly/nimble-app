import { ClassAbility, createAbility, defaultAction, defaultLimit, Limiter, Option, statIncreaseOptions } from "../abilities";

const mageSubclassAbilities: Record<string, ClassAbility> = {
    demandcontrol: createAbility(
        3,
        'Demand Control',
        `Whenever you cast a Tiered spell, you may spend 1 additional Mana to Demand Control: choose 1 option from the Control Table. If the spell misses, you must Demand Control for free.`,
        defaultAction,
        defaultAction,
        defaultLimit,
        false,
        [],
        true,
        [

            createAbility(
                3,
                'Control Table',
                `Choose an option that has not been chosen yet. Resets when you roll initiative or all options have been chosen.`,
                defaultAction,
                defaultAction,
                defaultLimit,
                false,
                [],
                true,
                [

                    createAbility(
                        3,
                        `I Insist`,
                        `Cast a Cantrip for free.`,
                        defaultAction,
                        defaultAction,
                        {has: true, count: 1, limiter: Limiter.INITIATIVE}
                    ),

                    createAbility(
                        3,
                        `Burn`,
                        `A creature of your choice within 60 ft. gains the burning condition.`,
                        defaultAction,
                        defaultAction,
                        {has: true, count: 1, limiter: Limiter.INITIATIVE}
                    ),

                    createAbility(
                        3,
                        `No`,
                        `An enemy of your choice cannot harm you during its next turn.`,
                        defaultAction,
                        defaultAction,
                        {has: true, count: 1, limiter: Limiter.INITIATIVE}
                    ),

                    createAbility(
                        3,
                        `Lose Control`,
                        ` An enemy immediately gains control of you until the end of your next turn (it can’t spend your mana, you get an additional turn after that).`,
                        defaultAction,
                        defaultAction,
                        {has: true, count: 1, limiter: Limiter.INITIATIVE}
                    )

                ]
            )

        ]
    ),

    invokechaos: createAbility(
        3,
        'Invoke Chaos',
        `Whenever you cast a Tiered spell, you may spend 1 additional Mana to Invoke Chaos:  roll on the Chaos Table.  If the spell is a critical hit, you must Invoke Chaos for free.`
    )
};

const mageSubclasses: Record<string, Option> = {
    mageofcontrol: {
        title: 'Mage of Control',
        effect: 'Gain the Demand Control ability.',
        value: 'mageofcontrol',
        abilities: [mageSubclassAbilities.demandcontrol]
    },
    mageofchaos: {
        title: 'Mage of Chaos',
        effect: 'Gain the Invoke Chaos ability.',
        value: 'mageofchaos',
        abilities: [mageSubclassAbilities.invokechaos]
    }
};

const spellshaperAbility: Record<string, ClassAbility> = {
    extradimensionalvision: createAbility(
        3,
        'Extra-Dimensional Vision',
        `(2 Mana) You may ignore the line of sight requirement of a spell. Your spell will phase though barriers and obstacles to reach a target you know of within range.`
    ),
    stretchtime: createAbility(
        3,
        'Stretch Time',
        `(2 Mana) Reduce the Action cost by 1.`
    ),
    echocasting: createAbility(
        3,
        'Echo Casting',
        `(2x Mana). When you cast a tiered, single target spell, you may cast a copy of that spell on a 2nd target for free.`
    ),
    elementalmorph: createAbility(
        3,
        'Elemental Morph',
        `(1 Mana) Change the damage tpe of the spell.`
    ),
    slowcasting: createAbility(
        3,
        'Slow Casting',
        `(+1 Action) Reduce the Mana cost of a spell by 2.`
    )
};

const spellshaperAbilityOptions: Option[] = [
    {
        title: 'Extra-Dimensional Vision',
        effect: '',
        value: 'extradimensionalvision',
        abilities: [spellshaperAbility.extradimensionalvision]
    },
    {
        title: 'Stretch Time',
        effect: '',
        value: 'stretchtime',
        abilities: [spellshaperAbility.stretchtime]
    },
    {
        title: 'Echo Casting',
        effect: '',
        value: 'echocasting',
        abilities: [spellshaperAbility.echocasting]
    },
    {
        title: 'Elemental Morph',
        effect: '',
        value: 'elementalmorph',
        abilities: [spellshaperAbility.elementalmorph]
    },
    {
        title: 'Slow Casting',
        effect: '',
        value: 'slowcasting',
        abilities: [spellshaperAbility.slowcasting]
    }
];

export const mageAbilities: ClassAbility[] = [
    createAbility(
        1,
        'Elemental Spellcasting',
        `You know Fire, Ice and Lightning cantrips.`
    ),

    createAbility(
        2,
        'Tier 1 Spells',
        `You unlock Tier 1 Fire, Ice and Lightning spells and gain a Mana pool equal to 2+INT.  Each time you gain a Mage level, your mana pool increases by 2; and by 1 whenever your INT increases.`
    ),

    createAbility(
        2,
        'Talented Researcher',
        `Gain advantage on Arcana or Lore checks when you have access to a large amount of books and at least 12 hours to study.`
    ),

    createAbility(
        3,
        'Subclass',
        'Choose a Mage subclass',
        defaultAction,
        defaultAction,
        defaultLimit,
        true,
        [mageSubclasses.mageofchaos, mageSubclasses.mageofchaos]
    ),

    createAbility(
        3,
        'Spell Shaper',
        `You gain the ability to empower your spells with powerful effects by spending additional mana. You may use 1 Spell Shaper ability per turn. Choose 2 abilities.`,
        defaultAction,
        defaultAction,
        defaultLimit,
        true,
        spellshaperAbilityOptions
    ),

    createAbility(
        4,
        'Tier 2 Spells',
        `You may now cast tier 2 Fire, Ice and Lightning spells and upcast spells to tier 2.`
    ),

    createAbility(
        4,
        'Key Stat Increase',
        '+1 INT or WIS.',
        defaultAction,
        defaultAction,
        defaultLimit,
        true,
        [statIncreaseOptions.intelligence, statIncreaseOptions.wisdom]
    ),

    createAbility(
        5,
        'Elemental Surge',
        'A surge of adrenaline and your affinity with the elements grants you additional power as combat begins.  When you roll intitative, roll 1d4 and regain that much mana (this expires at the end of combat if unused).'
    ),

    createAbility(
        5,
        'Secondary Stat Increase',
        '+1 STR, DEX or CHA',
        defaultAction,
        defaultAction,
        defaultLimit,
        true,
        [statIncreaseOptions.strength, statIncreaseOptions.dexterity, statIncreaseOptions.charisma]
    ),

    createAbility(
        5,
        'Upgraded Cantrips',
        `Your cantrips grow stronger.`
    )
];
