import { ClassAbility, createAbility, defaultAction, Option, statIncreaseOptions } from "../abilities";

const oathswornSubclassAbilities: Record<string, ClassAbility> = {
    auraofzeal: createAbility(
        3,
        'Aura of Zeal',
        `Double the maximum number of Judgment Dice you can have. You gain an aura with a radius of 20 ft. When you or an ally within your aura receives a critical hit gain 2 Judgment Dice.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),
    auraofrefuge: createAbility(
        3,
        'Aura of Refuge',
        `You gain +2 Armor while wearing a shield. You gain an aura with a radius of 20 ft., and can Interpose for an ally anywhere within your aura.`,
        defaultAction,
        defaultAction,
        defaultAction
    )
};

const oathswornSubclasses: Record<string, Option> = {
    oathofvengeance: {
        title: "Oath of Vengeance",
        effect: "Gain the Aura of Zeal ability.",
        value: "oathofvengeance",
        abilities: [oathswornSubclassAbilities.auraofzeal]
    },
    oathofrefuge: {
        title: "Oath of Refuge",
        effect: "Gain the Aura of Refuge ability.",
        value: "oathofreguge",
        abilities: [oathswornSubclassAbilities.auraofrefuge]
    }
};

const sacredDecree: Record<string, ClassAbility> = {
    expolosivejudgement: createAbility(
        3,
        'Explosive Judgement',
        `3 Actions: Expend all of your Judgment Dice, deal that much radiant damage to all enemies within your aura. 1/ Encounter.`,
        {has: true, count: 3},
        defaultAction,
        {has: true, count:1}
    ),
    improvedaura: createAbility(
        3,
        'Improved Aura',
        `Your aura increases to a 30 ft radius`,
        defaultAction,
        defaultAction,
        defaultAction
    ),
    radiantaura: createAbility(
        3,
        'Radiant Aura',
        `Action: End any single harmful condition or effect on yourself or another willing creature within your aura. You can use this feature CHA times/Long Rest.`,
        {has: true, count: 1},
        defaultAction,
        {has: true, count: 0}
    ),
    unstoppableprotector: createAbility(
        3,
        'Unstoppable Protector',
        `Gain +5 ft. speed. You may Interpose even if you are restrained, stunned or otherwise incapacitated. If you Interpose for a noncombatant NPC you may Interpose again this round.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),
    wellarmored: createAbility(
        3,
        'Well Armored',
        `Whenever you Interpose, gain temp HP equal to your STR.`,
        defaultAction,
        defaultAction,
        defaultAction
    )
};

const sacredDecreeOptions: Option[] = [
    {
        title: 'Explosive Judgement',
        effect: '',
        value: 'explosivejudgement',
        abilities: [sacredDecree.explosivejudgement]
    },
    {
        title: 'Improved Aura',
        effect: '',
        value: 'improvedaura',
        abilities: [sacredDecree.improvedaura]
    },
    {
        title: 'Radiant Aura',
        effect: '',
        value: 'radiantaura',
        abilities: [sacredDecree.radiantaura]
    },
    {
        title: 'Unstoppable Protector',
        effect: '',
        value: 'unstoppableprotector',
        abilities: [sacredDecree.unstoppableprotector]
    },
    {
        title: 'Well Armored',
        effect: '',
        value: 'wellarmored',
        abilities: [sacredDecree.wellarmored]
    }
];

export const oathswornAbilities: ClassAbility[] = [
    createAbility(
        1,
        'Judgment Dice',
        `Whenever an enemy attacks you, gain a d8 Judgment Die. When you make a melee attack, expend all of your Judgment Dice. If the attack hits, deal additional radiant damage equal to the sum rolled. The maximum number of Judgment Dice you can have is equal to your CHA.`,
        defaultAction,
        defaultAction,
        defaultAction,
        false,
        [],
        true,
        [

            createAbility(
                5,
                'Judgement Die (2)',
                `Whenever you are attacked, gain 2 Judgment Dice instead of 1`,
                defaultAction,
                defaultAction,
                defaultAction
            )

        ]
    ),
    
    createAbility(
        1,
        'Lay on Hands',
        `Gain a magical pool of healing power equal to 5x your Oathsworn level. Action: Touch a target and restore HP equal to the healing power spent. Recharges on a Long Rest`,
        {has: true, count: 1},
        defaultAction,
        defaultAction
    ),

    createAbility(
        2,
        'Radiant Spellcasting',
        `You know Tier 1 Radiant spells and cantrips.  You have a Mana pool equal to your oathsworn level + CHA`,
        defaultAction,
        defaultAction,
        defaultAction
    ),

    createAbility(
        2,
        'Condemning Strike',
        `When you expend your Judgment Dice, you can spend Mana to roll an additional Judgment Dice for each Mana spent (up to the tier of spells you have unlocked). This can increase your Judgment Dice beyond your natural maximum.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),

    createAbility(
        2,
        'Paragon of Virtue',
        `Advantage on Influence checks to convince someone when you are forthrighty telling the truth;  Disadvantage when misleading.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),

    createAbility(
        3,
        'Subclass',
        `Commit yourself to an oath and gain its benefits`,
        defaultAction,
        defaultAction,
        defaultAction,
        true,
        [oathswornSubclasses.oathofvengeance, oathswornSubclasses.oathofrefuge]
    ),

    createAbility(
        3,
        'Sacred Decree',
        'Learn 1 Sacred Decree.  Whenever you perform a selfless act for another during a Long Rest, you may exchange one you know for a different one.',
        defaultAction,
        defaultAction,
        defaultAction,
        true,
        sacredDecreeOptions
    ),

    createAbility(
        4,
        'My Life, for My Friends',
        `You can interpose for free.`,
        defaultAction,
        defaultAction,
        defaultAction
    ),

    createAbility(
        4,
        'Key Stat Increase',
        '+1 STR or CHA.',
        defaultAction,
        defaultAction,
        defaultAction,
        true,
        [statIncreaseOptions.strength, statIncreaseOptions.charisma]
    ),

    createAbility(
        4,
        'Tier 2 Spells',
        `You may now cast tier 2 spells and upcast spells at tier 2.`,
        defaultAction,
        defaultAction,
        defaultAction
    )

];
