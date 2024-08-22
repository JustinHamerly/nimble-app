import React, { useContext } from "react";
import './Stats.css';
import StatBlock from "../StatBlock";
import { SelectedCharacterContext } from "../../../../context/SelectedCharacterContext";

function StatsAndSaves() {
    const charContext = useContext(SelectedCharacterContext);
    if (!charContext) return null;

    const { state } = charContext;
    const { str, dex, int, wis, cha } = state.stats;

    const statArray = [str, dex, int, wis, cha];

    return (
        <section className="stats-section">
            <h3>STATS</h3>
            <div className="stats-list">
                {statArray.map((stat) => (
                    <StatBlock key={stat.stat} rollInfo={stat} />
                ))}
            </div>
        </section>
    );
}

export default StatsAndSaves;