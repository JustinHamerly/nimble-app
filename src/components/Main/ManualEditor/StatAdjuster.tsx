import React, { useContext } from "react";
import './StatAdjuster.css';
import { SelectedCharacterContext } from "../../../context/SelectedCharacterContext";
import { RollInfo } from "../../tools/interfaces";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

function StatAdjuster() {
    const charContext = useContext(SelectedCharacterContext);
    if (!charContext) return null;

    const { state, dispatch } = charContext;

    const handleStatIncrease = (statType: string): void => {
        const statArray: RollInfo[] = Object.values(state.stats);
        const statBlockToUpdate: RollInfo | undefined = statArray.find(statRollInfo => statRollInfo.stat === statType)
        if (!statBlockToUpdate) return;

        statBlockToUpdate.modifier += 1;

        dispatch({
            type: 'UPDATE_ROLL_INFO',
            payload: {
                section: 'stats',
                key: statType,
                rollInfo: statBlockToUpdate
            }
        })

        if (statType === 'str') {
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
        } else if (statType === 'dex') {
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
        } else if (statType === 'int' || statType === 'cha' || statType === 'wis') {
            checkAndUpdateWillSave();
        }

        const skillsToUpdate = returnAssociatedSkills(statType);
        skillsToUpdate.forEach(skill => {
            dispatch({
                type: 'UPDATE_ROLL_INFO',
                payload: {
                    section: 'skills',
                    key: skill.name,
                    rollInfo: {
                        ...skill,
                        modifier: skill.modifier + 1
                    }
                }
            })
        })
    };

    const handleStatDecrease = (statType: string) => {
        const statArray: RollInfo[] = Object.values(state.stats);
        const statBlockToUpdate: RollInfo | undefined = statArray.find(statRollInfo => statRollInfo.stat === statType)
        if (!statBlockToUpdate) return;

        statBlockToUpdate.modifier -= 1;

        dispatch({
            type: 'UPDATE_ROLL_INFO',
            payload: {
                section: 'stats',
                key: statType,
                rollInfo: statBlockToUpdate
            }
        })

        if (statType === 'str') {
            dispatch({
                type: 'UPDATE_ROLL_INFO',
                payload: {
                    section: 'saves',
                    key: 'str',
                    rollInfo: {
                        ...state.saves.str,
                        modifier: state.saves.str.modifier - 1
                    }
                }
            })
        } else if (statType === 'dex') {
            dispatch({
                type: 'UPDATE_ROLL_INFO',
                payload: {
                    section: 'saves',
                    key: 'dex',
                    rollInfo: {
                        ...state.saves.dex,
                        modifier: state.saves.dex.modifier - 1
                    }
                }
            })
        } else if (statType === 'int' || statType === 'cha' || statType === 'wis') {
            checkAndUpdateWillSave();
        }

        const skillsToUpdate = returnAssociatedSkills(statType);
        skillsToUpdate.forEach(skill => {
            dispatch({
                type: 'UPDATE_ROLL_INFO',
                payload: {
                    section: 'skills',
                    key: skill.name,
                    rollInfo: {
                        ...skill,
                        modifier: skill.modifier - 1
                    }
                }
            })
        })
    };

    const checkAndUpdateWillSave = () => {
        const willRollInfo = state.saves.will;
        const associatedStat = state.saves.will.stat;

        const willStats = {
            int: {
                statName: state.stats.int.stat,
                modifier: state.stats.int.modifier
            },
            wis: {
                statName: state.stats.wis.stat,
                modifier: state.stats.wis.modifier
            },
            cha: {
                statName: state.stats.cha.stat,
                modifier: state.stats.cha.modifier
            }
        }

        let currentWillStat;

        if (associatedStat === 'int') {
            currentWillStat = willStats.int
        } else if (associatedStat === 'wis') {
            currentWillStat = willStats.wis
        } else {
            currentWillStat = willStats.cha
        }

        const highestWillStat = Object.values(willStats).reduce((max, current) =>
            current.modifier > max.modifier ? current : max
        );

        if (currentWillStat.modifier !== highestWillStat.modifier) {
            const difference = currentWillStat.modifier - highestWillStat.modifier;
            if (difference < 1) {
                dispatch({
                    type: 'UPDATE_ROLL_INFO',
                    payload: {
                        section: 'saves',
                        key: 'will',
                        rollInfo: {
                            ...willRollInfo,
                            modifier: highestWillStat.modifier,
                            stat: highestWillStat.statName
                        }
                    }
                })
            } else {
                dispatch({
                    type: 'UPDATE_ROLL_INFO',
                    payload: {
                        section: 'saves',
                        key: 'will',
                        rollInfo: {
                            ...willRollInfo,
                            modifier: highestWillStat.modifier,
                            stat: currentWillStat.statName
                        }
                    }
                })
            }
        } else {
            dispatch({
                type: 'UPDATE_ROLL_INFO',
                payload: {
                    section: 'saves',
                    key: 'will',
                    rollInfo: {
                        ...willRollInfo,
                        modifier: highestWillStat.modifier,
                        stat: currentWillStat.statName
                    }
                }
            })
        }
    };

    const returnAssociatedSkills = (statType: string): RollInfo[] => {
        if (statType === 'str') {
            return [state.skills.might]
        } else if (statType === 'dex') {
            return [state.skills.slightofhand, state.skills.stealth]
        } else if (statType === 'int') {
            return [state.skills.arcana, state.skills.examination, state.skills.lore]
        } else if (statType === 'wis') {
            return [state.skills.naturecraft, state.skills.perception]
        } else if (statType === 'cha') {
            return [state.skills.influence, state.skills.insight]
        }

        return []
    };

    const stats = ['str', 'dex', 'int', 'wis', 'cha'];

    return (
        <div id='stat-adjuster-panel'>
            {
                stats.map((statName, i) => {

                    const statUp = <UpOutlined onClick={() => handleStatIncrease(statName)} style={{ color: '#007F00', marginLeft: '2px', fontSize: "14px" }} />
                    const statDown = <DownOutlined onClick={() => handleStatDecrease(statName)} style={{ color: '#CC0001', marginLeft: '2px', fontSize: "14px" }}/>
                    return (
                        <div className="stat-adjuster" key={i} id={statName + "-adjuster"}>
                            <div>
                                {statUp}
                            </div>
                            <h3 className="stat-adj-label">{statName.toUpperCase()} {Object.values(charContext.state.stats)[i].modifier}</h3> 
                            <div>
                                {statDown}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default StatAdjuster;