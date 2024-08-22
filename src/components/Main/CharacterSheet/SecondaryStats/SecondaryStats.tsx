import React, { useContext } from "react";
import { SelectedCharacterContext } from "../../../../context/SelectedCharacterContext";

function SecondaryStats() {
    const charContext = useContext(SelectedCharacterContext);
    if (!charContext) return null;
    
    return (
        <section id="secondary-stats-section">
            
        </section>
    )
};

export default SecondaryStats;
