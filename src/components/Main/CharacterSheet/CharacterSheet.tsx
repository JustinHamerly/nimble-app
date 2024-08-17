import React, { useContext } from "react";
import './CharacterSheet.css'
import Skills from "./Skills/Skills";
import { SelectedCharacterContext } from "../../../context/SelectedCharacterContext";
import Stats from "./StatsAndSaves/Stats";
import Saves from "./saves/Saves";
import CharacterCreator from "../CharacterCreator/CharacterCreator";

function CharacterSheet () {
    const context = useContext(SelectedCharacterContext);
    if (!context) return null;
    
    const {state, dispatch} = context;
    
    const seedStats = () =>{
        dispatch({type: 'SET_STAT_ARRAY', payload: {...state,
            str: {...state.stats.str, modifier: 2},
            dex: {...state.stats.dex, modifier: 2},
            int: {...state.stats.int, modifier: -1},
            wis: {...state.stats.wis, modifier: 0},
            cha: {...state.stats.cha, modifier: 1}
        }})
        dispatch({type: 'SET_SAVES', payload: {...state,
            str: {...state.saves.str, modifier: 2, advantages: 1},
            dex: {...state.saves.dex, modifier: 0},
            will: {...state.saves.will, modifier: 1, stat:'cha', disadvantages: 1}
        }})
    }

    return (
        <div className="char-sheet">
            <h1>Character Sheet</h1>
            <h3 onClick={seedStats}>SEED STATS</h3>
            <CharacterCreator />
            <Stats />
            <Saves />
            <Skills />
        </div>
    )
}

export default CharacterSheet