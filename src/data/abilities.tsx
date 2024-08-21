export interface Option {
    title: string;
    effect: string;
    value: string;
    abilities: ClassAbility[]
}

export interface ClassAbility {
    level: number;
    name: string;
    text: string;
    action: Action;
    reaction: Action;
    hasOptions: boolean;
    options: Option[];
    hasUpgrades: boolean,
    upgrades: ClassAbility[]
}

export interface Action {
    isAction: boolean;
    actionCount: number;
}

export const defaultAction: Action = { isAction: false, actionCount: 0 }

export function createAbility(level: number, name: string, text: string, action: Action, reaction: Action, hasOptions = false, options: Option[] = [], hasUpgrades = false, upgrades: ClassAbility[] = []): ClassAbility {
    return { level, name, text, action, reaction, hasOptions, options, hasUpgrades, upgrades };
}

export function createOption(title: string, effect: string, value: string, abilities: ClassAbility[]): Option {
    return { title, effect, value, abilities };
}

export const statIncreaseOptions: Record<string, Option> = {
    strength: {
        title: 'INCREASE',
        effect: '+1 STR',
        value: 'str',
        abilities: []
    },
    dexterity: {
        title: 'INCREASE',
        effect: '+1 DEX',
        value: 'dex',
        abilities: []
    },
    intelligence: {
        title: 'INCREASE',
        effect: '+1 INT',
        value: 'int',
        abilities: []
    },
    wisdom: {
        title: 'INCREASE',
        effect: '+1 WIS',
        value: 'wis',
        abilities: []
    },
    charisma: {
        title: 'INCREASE',
        effect: '+1 CHA',
        value: 'cha',
        abilities: []
    }
}

export const heroicAbilities = {
    actions: [
        createAbility(0, 'Assess', `A great way to include RP moments into combat. If you need more information, or an 
            edge in combat, a hero can use an Action to make a skill check to uncover information, 
            spot a weakness or damage vulnerability, intuit enemy tactics/plans, etc.`, { isAction: true, actionCount: 1 }, defaultAction),
        createAbility(0, 'Move', ` A character can use an Action to move up to their speed. This movement can be 
broken up with other actions if desired, and a hero can use multiple Actions to move 
multiple times in one turn. When in Difficult Terrain, movement speed is halved.`, { isAction: true, actionCount: 1 }, defaultAction)

    ],
    reactions: [
        createAbility(0, 'Defend', ` Reduce damage from any single attack by your Armor whenever you use this 
reaction. At the GM’s discretion, some damage may not be avoidable (i.e., psychic 
damage, or some areas of effect)`, defaultAction, { isAction: true, actionCount: 1 }),
        createAbility(0, 'Interpose', `If an ally within 10 ft. would be struck with an attack, you can push them out of 
the way and become the new target of the attack. You enter their square and 
move them to an adjacent square of your choice.`, defaultAction, { isAction: true, actionCount: 1 }),
        createAbility(0, 'Opportunity Attack', ` A melee attack made with disadvantage when an adjacent enemy moves away. 
Common monsters do not make opportunity attacks, only heroes and legendary 
monsters (e.g., bosses) can use them.`, defaultAction, { isAction: true, actionCount: 1 }),
            createAbility(0, 'Help', `Grant an ally advantage on an attack, skill check, or saving throw if you can 
reasonably explain to the GM how you could help in a given situation (limit 
of one help reaction for each roll). The GM may call for a skill check or grant 
advantage automatically, depending on how good the idea is. A fantastic way 
to bring role-playing and creativity into a combat encounter!`, defaultAction, { isAction: true, actionCount: 1 })
    ]
}

