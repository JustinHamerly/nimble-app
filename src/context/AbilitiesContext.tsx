import React, { createContext, useReducer, ReactNode, useMemo } from 'react';
import { ClassAbility } from '../data/abilities';
import { SpellAbility } from '../data/spells/spells';

type ActionType =
    | { type: 'ADD_CLASS_ABILITIES'; payload: ClassAbility[] }
    | { type: 'ADD_SPELL_ABILITIES'; payload: SpellAbility[] }


interface StateType {
    classAbilities: ClassAbility[];
    spellAbilities: SpellAbility[];
}

const initialState: StateType = {
    classAbilities: [],
    spellAbilities: []
}

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'ADD_CLASS_ABILITIES':
            return { ...state, classAbilities: [...state.classAbilities, ...action.payload] };
        case 'ADD_SPELL_ABILITIES':
            return {...state, spellAbilities: [...state.spellAbilities, ...action.payload]}
        default:
            return state;
    }
}

export const AbilitiesContext = createContext<
    {
        state: StateType;
        dispatch: React.Dispatch<ActionType>
    }
    | undefined
>(undefined);

const AbilitiesProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <AbilitiesContext.Provider value={value}>
            {children}
        </AbilitiesContext.Provider>
    )
}

export default AbilitiesProvider;
