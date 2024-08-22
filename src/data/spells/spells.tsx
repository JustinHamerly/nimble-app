import { fireSpells } from "./fireSpells";
import { iceSpells } from "./iceSpells";
import { lightingSpells } from "./lightingSpells";
import { radiantSpells } from "./radiant";

interface DiceRoll {
    hasDiceRoll: boolean;
    diceType: number;
    diceQuantity: number;
    modifier: number;
    conditionalModifier: string;
};

export const noDiceRoll: DiceRoll = {
    hasDiceRoll: false,
    diceType: 0,
    diceQuantity: 0,
    modifier: 0,
    conditionalModifier: ''
};

interface UpcastEffect {
    text: string;
    diceRoll: DiceRoll;
};

interface Upcast {
    canUpcast: boolean,
    text: string,
    upcastEffects: UpcastEffect[]
};

export const noUpcast: Upcast = {
    canUpcast: false,
    text: '',
    upcastEffects: []

};

interface Upgrade {
    hasUpgrade: boolean;
    upgradeLevel: number;
    spell: SpellAbility;
};

const noUpgrade: Upgrade = {
    hasUpgrade: false,
    upgradeLevel: 0,
    spell: null as any
};

export interface SpellAbility {
    tier: number;
    name: string;
    text: string;
    actionCost: number;
    diceRoll: DiceRoll;
    upcast: Upcast;
    upgrade: Upgrade;
};

export function createSpell(tier: number, name: string, text: string, actionCost: number, diceRoll: DiceRoll = noDiceRoll, upcast: Upcast = noUpcast, upgrade: Upgrade = noUpgrade): SpellAbility {
    return {tier, name, text, actionCost, diceRoll, upcast, upgrade};
};

export function createDiceRoll(diceType: number, diceQuantity: number, modifier: number = 0, conditionalModifier: string = '') {
    return {
        hasDiceRoll: true,
        diceType,
        diceQuantity,
        modifier,
        conditionalModifier
    };
};

export const spells = {
    fire: fireSpells,
    ice: iceSpells,
    lighting: lightingSpells,
    radiant: radiantSpells
}