import { createDiceRoll, createSpell, noDiceRoll, noUpcast, SpellAbility } from "./spells";

function createFlameDart(level: number, modifier: number): SpellAbility {
    return createSpell(
        0,
        `Flame Dart (lvl ${level})`,
        `Deal 1d10 + ${modifier} fire damage to any target within 60 ft. Inflicts the burning condition on a critical hit.`,
        1,
        createDiceRoll(10, 1, modifier)
    );
}

const fireUpgrades: Record<string, SpellAbility> = {
    flamedart5: createFlameDart(5, 5),
    flamedart10: createFlameDart(10, 10),
    flamedart15: createFlameDart(15, 15),
    flamedart20: createFlameDart(20, 20)
};


fireUpgrades.flamedart5.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 10,
    spell: fireUpgrades.flamedart10
};
fireUpgrades.flamedart10.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 15,
    spell: fireUpgrades.flamedart15
};
fireUpgrades.flamedart15.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 20,
    spell: fireUpgrades.flamedart20
};

export const fireSpells: SpellAbility[] = [
    createSpell(
        0,
        'Flame Dart',
        `Deal 1d10 fire damage to any target within 60 ft. Inflicts the burning condition on a critical hit.`,
        1,
        createDiceRoll(10, 1),
        noUpcast,
        {
            hasUpgrade: true,
            upgradeLevel: 5,
            spell: fireUpgrades.flamedart5
        }
    ),

    createSpell(
        0,
        'Enchant Weapon',
        `A weapon you hold is enchanted with magical flame for 1 minute. The weapon's damage becomes a 1d10 + your level and inflicts the burning condition on a critical hit.`,
        1,
        createDiceRoll(10, 1, 0, 'level')
    ),

    createSpell(
        1,
        'Consume Flame',
        `Deal 4d10 fire damage to a burning target within 60 ft. ending the condition.`,
        2,
        createDiceRoll(10, 4),
        {
            canUpcast: true,
            text: `+2d10 damage for each additional mana spent.`,
            upcastEffects: [
                {
                    text: `Deal 6d10 fire damage to a burning target within 60 ft. ending the condition.`,
                    diceRoll: createDiceRoll(10, 6)
                },
                {
                    text: `Deal 8d10 fire damage to a burning target within 60 ft. ending the condition.`,
                    diceRoll: createDiceRoll(10, 8)
                },
                {
                    text: `Deal 10d10 fire damage to a burning target within 60 ft. ending the condition.`,
                    diceRoll: createDiceRoll(10, 10)
                }
            ]
        }
    ),

    createSpell(
        2,
        `Heart's Fire`,
        `Give an ally within 60 ft. an extra Action.`,
        1,
        noDiceRoll,
        {
            canUpcast: true,
            text: `Add 20 ft. range for each additional mana spent.`,
            upcastEffects: [
                {
                    text: `Give an ally within 80 ft. an extra Action.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `Give an ally within 100 ft. an extra Action.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `Give an ally within 120 ft. an extra Action.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `Give an ally within 140 ft. an extra Action.`,
                    diceRoll: noDiceRoll
                }
            ]
        }
    )

];
