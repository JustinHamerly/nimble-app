import { createDiceRoll, createSpell, noDiceRoll, noUpcast, SpellAbility } from "./spells";

function createIceLance(level: number, modifier: number): SpellAbility {
    return createSpell(
        0,
        `Ice Lance (lvl ${level})`,
        `Deal 1d6 + ${modifier} Cold damage to a target within 90 ft. Advantage against creatures that are slowed (any creature with actions or movement hampered is slowed; e.g., Dazed, Grappled, Prone, Difficult Terrain).`,
        1,
        createDiceRoll(6, 1, modifier)
    );
};

function createBitingFog(level: number, modifier: number): SpellAbility {
    return createSpell(
        0,
        `Biting Fog (lvl ${level})`,
        `(Concentration, up to 1 minute.) Create a 10 ft. opaque cube of icy fog adjacent to you. Creatures in it take 1d6 + ${modifier} cold damage when you create it and at the end of their turn.`,
        1,
        createDiceRoll(6, 1, modifier)
    );
};

const iceUpgrades: Record<string, SpellAbility> = {
    icelance5: createIceLance(5, 3),
    icelance10: createIceLance(10, 6),
    icelance15: createIceLance(15, 9),
    icelance20: createIceLance(20, 12),

    bitingfog5: createBitingFog(5, 3),
    bitingfog10: createBitingFog(10, 6),
    bitingfog15: createBitingFog(15, 9),
    bitingfog20: createBitingFog(20, 12),
};


iceUpgrades.icelance5.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 10,
    spell: iceUpgrades.icelance10
};
iceUpgrades.icelance10.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 15,
    spell: iceUpgrades.icelance15
};
iceUpgrades.icelance15.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 20,
    spell: iceUpgrades.icelance20
};

iceUpgrades.bitingfog5.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 10,
    spell: iceUpgrades.bitingfog10
};
iceUpgrades.bitingfog10.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 15,
    spell: iceUpgrades.bitingfog15
};
iceUpgrades.bitingfog15.upgrade = {
    hasUpgrade: true,
    upgradeLevel: 20,
    spell: iceUpgrades.bitingfog20
};


export const iceSpells: SpellAbility[] = [
    createSpell(
        0,
        'Ice Lance',
        `Deal 1d6 Cold damage to a target within 90 ft. Advantage against creatures that are slowed (any creature with actions or movement hampered is slowed; e.g., Dazed, Grappled, Prone, Difficult Terrain).`,
        1,
        createDiceRoll(6, 1),
        noUpcast,
        {
            hasUpgrade: true,
            upgradeLevel: 5,
            spell: iceUpgrades.icelance5
        }
    ),

    createSpell(
        0,
        'Biting Fog',
        `(Concentration, up to 1 minute.) Create a 10 ft. opaque cube of icy fog adjacent to you. Creatures in it take 1d6 cold damage when you create it and at the end of their turn.`,
        1,
        createDiceRoll(6, 1),
        noUpcast,
        {
            hasUpgrade: true,
            upgradeLevel: 5,
            spell: iceUpgrades.bitingfog5
        }
    ),

    createSpell(
        1,
        'Glacial Shard',
        `Deal 3d6 cold damage to a target within 90 ft. On a critical hit a medium or smaller target is knocked prone. Advantage against slowed creatures.`,
        2,
        createDiceRoll(6, 3),
        {
            canUpcast: true,
            text: `Increase the size by 1 and +1d6 for each additional mana spent.`,
            upcastEffects: [
                {
                    text: `Deal 4d6 cold damage to a target within 90 ft. On a critical hit a large or smaller target is knocked prone. Advantage against slowed creatures.`,
                    diceRoll: createDiceRoll(6, 4)
                },
                {
                    text: `Deal 5d6 cold damage to a target within 90 ft. On a critical hit a huge or smaller target is knocked prone. Advantage against slowed creatures.`,
                    diceRoll: createDiceRoll(6, 5)
                },
                {
                    text: `Deal 6d6 cold damage to a target within 90 ft. On a critical hit a gargantuan or smaller target is knocked prone. Advantage against slowed creatures.`,
                    diceRoll: createDiceRoll(6, 6)
                }
            ]
        }
    ),

    createSpell(
        2,
        'Frost Shield',
        `(Reaction, when you would defend) Increase your Armor by one of your Key attributes for this round, then Defend for free.`,
        1,
        noDiceRoll,
        {
            canUpcast: true,
            text: `+Key Armor for each additional mana spent.`,
            upcastEffects: [
                {
                    text: `(Reaction, when you would defend) Increase your Armor by one of your (Key attributes*2) for this round, then Defend for free.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `(Reaction, when you would defend) Increase your Armor by one of your (Key attributes*3) for this round, then Defend for free.`,
                    diceRoll: noDiceRoll
                },
                {
                    text: `(Reaction, when you would defend) Increase your Armor by one of your (Key attributes*3) for this round, then Defend for free.`,
                    diceRoll: noDiceRoll
                }
            ]
        }
    )

];
