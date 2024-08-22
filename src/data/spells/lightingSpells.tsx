import { createDiceRoll, createSpell, noDiceRoll, noUpcast, SpellAbility } from "./spells";

function createZap(level: number, modifier: number): SpellAbility {
    return createSpell(
        0,
        `Zap (lvl ${level})`,
        `Deal 2d8 + ${modifier} damage to a target within 120 ft. If this misses, the lightning fails to find ground and strikes you instead.`,
        1,
        createDiceRoll(8, 2, modifier)
    )
};

function createElectricalDischarge(level: number, modifier: number): SpellAbility {
    return createSpell(
        0,
        `Electrical Discharge (lvl ${level})`,
        `(This can only be cast if you have taken lightning damage since last casting this spell this encounter.) Deal 2d8 + ${modifier} lightning damage to all other creatures within 10 ft. of you. This attack does not miss.`,
        1,
        createDiceRoll(8, 2, modifier)
    )
};

const lightningUpgrades: Record<string, SpellAbility> = {
    zap5: createZap(5, 4),
    zap10: createZap(10, 8),
    zap15: createZap(15, 12),
    zap20: createZap(20, 16),

    electricaldischarge5: createElectricalDischarge(5, 4),
    electricaldischarge10: createElectricalDischarge(10, 8),
    electricaldischarge15: createElectricalDischarge(15, 12),
    electricaldischarge20: createElectricalDischarge(20, 16)
};

lightningUpgrades.zap5.upgrade={
    hasUpgrade: true,
    upgradeLevel: 10,
    spell: lightningUpgrades.zap10
};
lightningUpgrades.zap10.upgrade={
    hasUpgrade: true,
    upgradeLevel: 15,
    spell: lightningUpgrades.zap15
};
lightningUpgrades.zap15.upgrade={
    hasUpgrade: true,
    upgradeLevel: 20,
    spell: lightningUpgrades.zap20
};

lightningUpgrades.electricaldischarge5.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 10,
    spell: lightningUpgrades.electricaldischarge10
};
lightningUpgrades.electricaldischarge10.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 15,
    spell: lightningUpgrades.electricaldischarge15
};
lightningUpgrades.electricaldischarge15.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 20,
    spell: lightningUpgrades.electricaldischarge20
};

export const lightingSpells: SpellAbility[] = [
    createSpell(
        0,
        'Zap',
        `Deal 2d8 damage to a target within 120 ft. If this misses, the lightning fails to find ground and strikes you instead.`,
        1,
        createDiceRoll(8, 2),
        noUpcast,
        {
            hasUpgrade: true,
            upgradeLevel: 5,
            spell: lightningUpgrades.zap5
        }
    ),

    createSpell(
        0,
        'Electrical Discharge',
        `(This can only be cast if you have taken lightning damage since last casting this spell this encounter.) Deal 2d8 lightning damage to all other creatures within 10 ft. of you. This attack does not miss.`,
        1,
        createDiceRoll(8, 2),
        noUpcast,
        {
            hasUpgrade: true,
            upgradeLevel: 5,
            spell: lightningUpgrades.electricaldischarge5
        }
    ),

    createSpell(
        1,
        `Arc Lighting`,
        `Deal 3d8 lightning damage to a target within 120 ft. The bolt also strikes the next closest creature to your target. If this attack misses, the lightning fails to find ground and strikes you instead.`,
        2,
        createDiceRoll(8, 3),
        {
            canUpcast: true,
            text: `+1d8. for each additional mana spent.`,
            upcastEffects: [
                {
                    text: `Deal 4d8 lightning damage to a target within 120 ft. The bolt also strikes the next closest creature to your target. If this attack misses, the lightning fails to find ground and strikes you instead.`,
                    diceRoll: createDiceRoll(8, 4)
                },
                {
                    text: `Deal 5d8 lightning damage to a target within 120 ft. The bolt also strikes the next closest creature to your target. If this attack misses, the lightning fails to find ground and strikes you instead.`,
                    diceRoll: createDiceRoll(8, 5)
                },
                {
                    text: `Deal 6d8 lightning damage to a target within 120 ft. The bolt also strikes the next closest creature to your target. If this attack misses, the lightning fails to find ground and strikes you instead.`,
                    diceRoll: createDiceRoll(8, 6)
                }
            ]
        }
    ),

    createSpell(
        2,
        'Alacrity',
        `Once, before your initiative roll, add one of your KEY stats to your roll.`,
        0,
        noDiceRoll,
        {
            canUpcast: true,
            text: `+1 to your initiative per additional mana spent.`,
            upcastEffects: [
                {
                    text: `Once, before your initiative roll, add one of your KEY stats + 1 to your roll.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `Once, before your initiative roll, add one of your KEY stats + 2 to your roll.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `Once, before your initiative roll, add one of your KEY stats + 3 to your roll.`,
                    diceRoll: noDiceRoll
                }
            ]
        }
    )
]