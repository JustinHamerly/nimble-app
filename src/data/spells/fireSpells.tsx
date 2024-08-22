import { createSpell, SpellAbility } from "./spells";

const fireUpgrades: Record<string, SpellAbility> = {
    flamedart5: createSpell(
        0,
        'Flame Dart (lvl 5)',
        `Deal 1d10 + 5 fire damage to any target within 60 ft. Inflicts the burning condition on a critical hit.`,
        1,
        {
            hasDiceRoll: true,
            diceType: 10,
            diceQuantity: 1,
            modifier: 5,
            conditionalModifier: ''
        }
    ),

    flamedart10: createSpell(
        0,
        'Flame Dart (lvl 10)',
        `Deal 1d10 + 10 fire damage to any target within 60 ft. Inflicts the burning condition on a critical hit.`,
        1,
        {
            hasDiceRoll: true,
            diceType: 10,
            diceQuantity: 1,
            modifier: 10,
            conditionalModifier: ''
        }
    ),

    flamedart15: createSpell(
        0,
        'Flame Dart (lvl 15)',
        `Deal 1d10 + 15 fire damage to any target within 60 ft. Inflicts the burning condition on a critical hit.`,
        1,
        {
            hasDiceRoll: true,
            diceType: 10,
            diceQuantity: 1,
            modifier: 15,
            conditionalModifier: ''
        }
    ),

    flamedart20: createSpell(
        0,
        'Flame Dart (lvl 20)',
        `Deal 1d10 + 20 fire damage to any target within 60 ft. Inflicts the burning condition on a critical hit.`,
        1,
        {
            hasDiceRoll: true,
            diceType: 10,
            diceQuantity: 1,
            modifier: 20,
            conditionalModifier: ''
        }
    ),
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
        {
            hasDiceRoll: true,
            diceType: 10,
            diceQuantity: 1,
            modifier: 0,
            conditionalModifier: ''
        },
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
        {
            hasDiceRoll: true,
            diceType: 10,
            diceQuantity: 1,
            modifier: 0,
            conditionalModifier: 'level'
        }
    )

];
