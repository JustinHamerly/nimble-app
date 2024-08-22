import { create } from "domain";
import { createDiceRoll, createSpell, noDiceRoll, noUpcast, SpellAbility } from "./spells";

function createRebuke(level: number, diceAmount: number): SpellAbility {
    return createSpell(
        0,
        `Rebuke (lvl ${level})`,
        `Deal ${diceAmount}d6 damage to a target within 20 ft., ignoring armor. Double damage against undead or the cowardly (those behind cover).`,
        1,
        createDiceRoll(6, diceAmount)
    )
}

function createTrueStrike(level: number, modifier: number): SpellAbility {
    return createSpell(
        0,
        `True Strike (lvl ${level})`,
        `Give yourself or an ally within ${modifier} ft. advantage on the next attack they make until the end of their next turn.`,
        1
    )
}

const radiantUpgrades: Record<string, SpellAbility> = {
    rebuke5: createRebuke(5, 2),
    rebuke10: createRebuke(10, 3),
    rebuke15: createRebuke(15, 4),
    rebuke20: createRebuke(20, 5),

    truestrike5: createTrueStrike(5, 15),
    truestrike10: createTrueStrike(10, 20),
    truestrike15: createTrueStrike(15, 25),
    truestrike20: createTrueStrike(20, 30)
}

radiantUpgrades.rebuke5.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 10,
    spell: radiantUpgrades.rebuke10
};
radiantUpgrades.rebuke10.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 15,
    spell: radiantUpgrades.rebuke15
};
radiantUpgrades.rebuke15.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 20,
    spell: radiantUpgrades.rebuke20
};

radiantUpgrades.truestrike5.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 10,
    spell: radiantUpgrades.truestrike10
};
radiantUpgrades.truestrike10.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 15,
    spell: radiantUpgrades.truestrike15
};
radiantUpgrades.truestrike15.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 20,
    spell: radiantUpgrades.truestrike20
};

export const radiantSpells: SpellAbility[] = [
    createSpell(
        0,
        `Rebuke`,
        `Deal 1d6 damage to a target within 20 ft., ignoring armor. Double damage against undead or the cowardly (those behind cover).`,
        1,
        createDiceRoll(6, 1),
        noUpcast,
        {
            hasUpgrade: true,
            upgradeLevel: 5,
            spell: radiantUpgrades.rebuke5
        }
    ),

    createSpell(
        0,
        `True Strike`,
        `Give yourself or an ally within 10 ft. advantage on the next attack they make until the end of their next turn.`,
        1,
        noDiceRoll,
        noUpcast,
        {
            hasUpgrade: true,
            upgradeLevel: 5,
            spell: radiantUpgrades.truestrike5
        }
    ),

    createSpell(
        1,
        'Heal',
        `Touch a creature and heal it 1d6+KEY HP.`,
        1,
        createDiceRoll(6, 1),
        {
            canUpcast: true,
            text: `For each additional mana spent choose one: +1 Target, +30 ft. range, +1d6 healing. If 5+ mana is spent, you may also heal 1 negative condition (e.g., blind, deaf, petrified, 1 level of exhaustion, etc.).`,
            upcastEffects: [
                {
                    text: `choose one: +1 Target, +30 ft. range, +1d6 healing.`,
                    diceRoll: createDiceRoll(6, 1)
                },
                {
                    text: `choose two: +1 Target, +30 ft. range, +1d6 healing.`,
                    diceRoll: createDiceRoll(6, 1)
                },
                {
                    text: `choose three: +1 Target, +30 ft. range, +1d6 healing.`,
                    diceRoll: createDiceRoll(6, 1)
                },
                {
                    text: `choose four: +1 Target, +30 ft. range, +1d6 healing.`,
                    diceRoll: createDiceRoll(6, 1)
                },
                {
                    text: `+1 Target, +30 ft. range, +1d6 healing, heal 1 negative condition (e.g., blind, deaf, petrified, 1 level of exhaustion, etc.)`,
                    diceRoll: createDiceRoll(6, 1)
                }
            ]
        }
    ),

    createSpell(
        2,
        `Warding Bond`,
        `Designate a willing creature as your ward for 1 hour. They take half damage from all attacks, you are attacked for the other half.`,
        2,
        noDiceRoll,
        {
            canUpcast: true,
            text: `+1 hour duration for each additional mana spent.`,
            upcastEffects: [
                {
                    text: `Designate a willing creature as your ward for 2 hours. They take half damage from all attacks, you are attacked for the other half.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `Designate a willing creature as your ward for 3 hours. They take half damage from all attacks, you are attacked for the other half.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `Designate a willing creature as your ward for 4 hours. They take half damage from all attacks, you are attacked for the other half.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `Designate a willing creature as your ward for 5 hours. They take half damage from all attacks, you are attacked for the other half.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `Designate a willing creature as your ward for 6 hours. They take half damage from all attacks, you are attacked for the other half.`,
                    diceRoll: noDiceRoll
                },
            ]
        }     
    )
];
