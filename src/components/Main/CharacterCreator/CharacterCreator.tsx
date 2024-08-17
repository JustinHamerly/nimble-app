import React, {useContext} from "react";

import { getCharActions } from "../../../context/SelectedCharacterActions"
import { SelectedCharacterContext } from "../../../context/SelectedCharacterContext";
import { RollInfo } from "../../tools/interfaces";


function CharacterCreator () {
    const charActions = getCharActions();
    const charContext = useContext(SelectedCharacterContext);
    if (!charContext) return null;

    const {state, dispatch} = charContext;

    const handleStatIncrease = (statType: string): void => {
        const statArray: RollInfo[] = Object.values(state.stats);
        const statBlockToUpdate: RollInfo|undefined = statArray.find(statRollInfo => statRollInfo.stat === statType)
        if(!statBlockToUpdate) return;

        statBlockToUpdate.modifier += 1;
        
        dispatch({
            type: 'UPDATE_ROLL_INFO',
            payload: {
               section: 'stats',
               key: statType,
               rollInfo: statBlockToUpdate
            }
        })
    
        // conditionally increase str and dex saves
        if (statType === 'str'){
            dispatch({
                type: 'UPDATE_ROLL_INFO',
                payload: {
                    section: 'saves',
                    key: 'str',
                    rollInfo: {
                        ...state.saves.str,
                        modifier: state.saves.str.modifier + 1
                    }
                }
            })
        }else if (statType === 'dex'){
            dispatch({
                type: 'UPDATE_ROLL_INFO',
                payload: {
                    section: 'saves',
                    key: 'dex',
                    rollInfo: {
                        ...state.saves.dex,
                        modifier: state.saves.dex.modifier + 1
                    }
                }
            })
        }else if (statType === 'int' || statType === 'cha' || statType === 'wis'){
            checkAndUpdateWillSave(statType);
        }
        
        // update appropriate skills
        const skillsToUpdate = returnAssociatedSkills(statType);
        skillsToUpdate.forEach(skill => {
            dispatch({
                type: 'UPDATE_ROLL_INFO',
                payload: {
                    section: 'skills',
                    key: skill.name,
                    rollInfo:{
                        ...skill,
                        modifier: skill.modifier + 1
                    }
                }
            })
        })
    }
    
    const handleStatDecrease =  (statType: 'string') => {
        // decrease given stat
    
        // conditionally decrease str and dex
    
        // check if stat type is a WILL type and if so check and update Will
    
        // update appropriate skills
    }
    
    const checkAndUpdateWillSave = (statType: string) => {
        // check which stat is currently being used for will and its current value [stat, value]
        // check which will stat is highest in stats [stat, value]
        // if current and new are different:
        // 1. find difference of values
        // 2. if current < highest increase will stat by difference and change stat name to highest type
        // 3. if current > highest decrease will stat by abs(difference) and change stat name to highest type
    }

    const returnAssociatedSkills = (statType: string): RollInfo[] => {
        if(statType === 'str'){
            return [state.skills.might]
        }else if (statType === 'dex'){
            return [state.skills.slightofhand, state.skills.stealth]
        }else if (statType === 'int'){
            return [state.skills.arcana, state.skills.examination, state.skills.lore]
        }else if (statType === 'wis'){
            return [state.skills.naturecraft, state.skills.perception]
        }else if (statType === 'cha'){
            return [state.skills.influence, state.skills.insight]
        }

        return []
    }
    


    return (
        <>
        </>
    )
}

export default CharacterCreator