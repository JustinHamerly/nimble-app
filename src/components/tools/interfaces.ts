export interface RollInfo {
    name: string;
    stat: string;
    modifier: number;
    diceAmount?: number;
    diceType?: number;
    advantages?: number;
    disadvantages?: number;
};

export interface FlavorBio {
    name: string;
    race: string;
    classes: string[];
    weight: string;
    height: string;
};

export interface MechanicalStats {
    maxHP: number;
    tempHP: number;
    currentHP: number;
    maxExhaustion: number;
    currentExhaustion: number;
    hitDice: string;
    maxHitDice: number;
    currentHitDice: number;
    armor: number;
    speed: number;
    initiative: number;
};

export interface Stats {
    str: RollInfo,
    dex: RollInfo,
    int: RollInfo,
    wis: RollInfo,
    cha: RollInfo
};

export interface Saves {
    str: RollInfo,
    dex: RollInfo,
    will: RollInfo,
};

export interface Skills {
    arcana: RollInfo,
    examination: RollInfo,
    influence: RollInfo,
    insight: RollInfo,
    lore: RollInfo,
    might: RollInfo,
    naturecraft: RollInfo,
    perception: RollInfo,
    slightofhand: RollInfo,
    stealth: RollInfo
};