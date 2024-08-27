import { createAbility, defaultAction, Limiter } from "../abilities";

export const raceAbilities = {
    adaptable: createAbility(
        0,
        'Adaptable',
        `+1 to all skills. +1 to Initiative.`
    ),
    swiftnessandgrace: createAbility(
        0,
        `Swiftness & Grace`,
        `+3 to initiative`
    ),
    stout: createAbility(
        0,
        `Stout`,
        `+2 max Hit Dice, +1 max Wounds, -5ft Speed`
    ),
    lucky: createAbility(
        0,
        `Lucky`,
        `Whenever you would fail a save, you can choose to succeed instead. 1/Long Rest.`,
        defaultAction,
        defaultAction,
        {has: true, count:1, limiter: Limiter.LONGREST}
    )
}