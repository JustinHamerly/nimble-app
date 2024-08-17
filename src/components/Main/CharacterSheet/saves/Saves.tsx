import React, { useContext } from "react";
import './Saves.css'
import { SelectedCharacterContext } from "../../../../context/SelectedCharacterContext";
import StatBlock from "../StatBlock";
function Saves() {
    const charContext = useContext(SelectedCharacterContext);
    if (!charContext) return null;

    const { state } = charContext;
    const { str, dex, will } = state.saves;

    const saveArray = [str, dex, will];

    return (

        <section className="saves-section">
            <h3>SAVES</h3>
            <div className="save-list">
                {
                    saveArray.map((stat, i) => <StatBlock key={i} rollInfo={stat} />)
                }
            </div>
        </section>

    )
}

export default Saves