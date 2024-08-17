import React, { createContext, useReducer, ReactNode, useMemo } from 'react';
import { FlavorBio, MechanicalStats, RollInfo, Stats, Saves, Skills} from '../components/tools/interfaces';

type ActionType =
    | { type: 'SET_FLAVOR_BIO'; payload: FlavorBio }
    | { type: 'SET_MECHANICAL_STATS'; payload: MechanicalStats }
    | { type: 'SET_STAT_ARRAY', payload: Stats }
    | { type: 'SET_SAVES', payload: Saves }
    | { type: 'SET_SKILLS', payload: Skills }
    | { type: 'UPDATE_ROLL_INFO', payload: {
        section: 'stats' | 'saves' | 'skills';
        key: string;
        rollInfo: RollInfo
        }}

interface StateType {
    flavorBio: FlavorBio;
    mechanicalStats: MechanicalStats;
    stats: {
        str: RollInfo,
        dex: RollInfo,
        int: RollInfo,
        wis: RollInfo,
        cha: RollInfo
    };
    saves: {
        str: RollInfo,
        dex: RollInfo,
        will: RollInfo,
    };
    skills: {
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
}



const initialState: StateType = {
    flavorBio: {
        name: '',
        race: '',
        classes: [''],
        weight: '',
        height: '',
    },
    mechanicalStats: {
        maxHP: 0,
        tempHP: 0,
        currentHP: 0,
        maxExhaustion: 6,
        currentExhaustion: 0,
        hitDice: '',
        maxHitDice: 0,
        currentHitDice: 0,
        armor: 0,
        speed: 30,
        initiative: 0,
    },
    stats:{
        str: {
            name: 'STRENGTH',
            stat: 'str',
            modifier: 0
        },
        dex: {
            name: 'DEXTERITY',
            stat: 'dex',
            modifier: 0
        },
        int: {
            name: 'INTELLIGENCE',
            stat: 'int',
            modifier: 0
        },
        wis: {
            name: 'WISDOM',
            stat: 'wis',
            modifier: 0
        },
        cha: {
            name: 'CHARISMA',
            stat: 'cha',
            modifier: 0
        }
    },
    saves:{
        str: {
            name: 'STRENTH',
            stat: 'str',
            modifier: 0
        },
        dex: {
            name: 'DEXTERITY',
            stat: 'dex',
            modifier: 0
        },
        will: {
            name: 'WILL',
            stat: '',
            modifier: 0
        }
    },
    skills: {
        arcana: {
            name: 'ARCANA',
            stat: 'int',
            modifier: 0
        },
        examination: {
            name: 'EXAMINATION',
            stat: 'int',
            modifier: 0
        },
        influence: {
            name: 'INFLUENCE',
            stat: 'cha',
            modifier: 0
        },
        insight: {
            name: 'INSIGHT',
            stat: 'cha',
            modifier: 0
        },
        lore: {
            name: 'LORE',
            stat: 'int',
            modifier: 0
        },
        might: {
            name: 'MIGHT',
            stat: 'str',
            modifier: 0
        },
        naturecraft: {
            name: 'NATURECRAFT',
            stat: 'wis',
            modifier: 0
        },
        perception: {
            name: 'PERCEPTION',
            stat: 'wis',
            modifier: 0
        },
        slightofhand: {
            name: 'SLT-OF-HND',
            stat: 'dex',
            modifier: 0
        },
        stealth: {
            name: 'STEALTH',
            stat: 'dex',
            modifier: 0
        }
    }
}

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_FLAVOR_BIO':
            return { ...state, flavorBio: action.payload };
        case 'SET_MECHANICAL_STATS':
            return { ...state, mechanicalStats: action.payload };
        case 'SET_STAT_ARRAY':
            return { ...state, stats: action.payload };
        case 'SET_SAVES':
            return { ...state, saves: action.payload};
        case 'SET_SKILLS':
            return { ...state, skills: action.payload};
        case 'UPDATE_ROLL_INFO': {
            const {section, key, rollInfo} = action.payload;
            return {
                ...state,
                [section]: {
                    ...state[section],
                    [key]: rollInfo
                }
            }
        }
        default:
            return state;
    }
}



export const SelectedCharacterContext = createContext<
    {
        state: StateType;
        dispatch: React.Dispatch<ActionType>
    }
    | undefined
>(undefined);

const SelectedCharacterProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => ({state, dispatch}), [state]);

    return (
        <SelectedCharacterContext.Provider value={value}>
            {children}
        </SelectedCharacterContext.Provider>
    )
}

export default SelectedCharacterProvider;
