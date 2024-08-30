export interface ClassAbility {
    level: number;
    name: string;
    text: string;
    source: string;
    action: Action;
    reaction: Action;
    limit: Limit;
    hasUpgrades: boolean,
    upgrades: ClassAbility[]
}

export interface Action {
    has: boolean;
    count: number;
    altCountAbilityString?: string;
}

export enum Limiter {
    NONE,
    LONGREST,
    SHORTREST,
    INITIATIVE,
    DAY,
    ENCOUNTER,
    ROUND
}

export interface Limit extends Action {
    limiter: Limiter
}

export interface Choice {
    name: string;
    text: string;
    levels: number[];
    choices: string[];
}

export interface AbilityChoice extends Choice {
    abilities: ClassAbility[];
}

export interface SubclassChoice extends Choice {
    abilities: ClassAbility[][];
}

export const defaultAction: Action = { has: false, count: 0 };
export const defaultLimit: Limit = {has: false, count: 0, limiter: Limiter.NONE}

export function createAbility(
    level: number, 
    name: string, 
    text: string, 
    source: string,
    action: Action = defaultAction, 
    reaction: Action = defaultAction, 
    limit: Limit = defaultLimit, 
    hasUpgrades = false, 
    upgrades: ClassAbility[] = []
): ClassAbility {
    return { level, name, text, source, action, reaction, limit, hasUpgrades, upgrades };
}

export const heroicAbilities = [
    createAbility(0, 'Assess', `A great way to include RP moments into combat. If you need more information, or an edge in combat, a hero can use an Action to make a skill check to uncover information, spot a weakness or damage vulnerability, intuit enemy tactics/plans, etc.`, 'heroic ability', { has: true, count: 1 }),
    createAbility(0, 'Move', ` A character can use an Action to move up to their speed. This movement can be broken up with other actions if desired, and a hero can use multiple Actions to move multiple times in one turn. When in Difficult Terrain, movement speed is halved.`, 'heroic ability', { has: true, count: 1 }),

    createAbility(0, 'Defend', `Reduce damage from any single attack by your Armor whenever you use this reaction. At the GM's discretion, some damage may not be avoidable (i.e., psychic damage, or some areas of effect)`, 'heroic ability', defaultAction, { has: true, count: 1 }),
    createAbility(0, 'Interpose', `If an ally within 10 ft. would be struck with an attack, you can push them out of the way and become the new target of the attack. You enter their square and move them to an adjacent square of your choice.`, 'heroic ability', defaultAction, { has: true, count: 1 }),
    createAbility(0, 'Opportunity Attack', ` A melee attack made with disadvantage when an adjacent enemy moves away. Common monsters do not make opportunity attacks, only heroes and legendary monsters (e.g., bosses) can use them.`, 'heroic ability', defaultAction, { has: true, count: 1 }),
    createAbility(0, 'Help', `Grant an ally advantage on an attack, skill check, or saving throw if you can reasonably explain to the GM how you could help in a given situation (limit of one help reaction for each roll). The GM may call for a skill check or grant advantage automatically, depending on how good the idea is. A fantastic way to bring role-playing and creativity into a combat encounter!`, 'heroic ability', defaultAction, { has: true, count: 1 })
];

