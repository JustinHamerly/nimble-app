import React, { useContext } from "react";
import './BioInfo.css'
import { SelectedCharacterContext } from "../../../../context/SelectedCharacterContext";

function BioInfo () {
    const charContext = useContext(SelectedCharacterContext);
    if (!charContext) return null;

    const {flavorBio} = charContext.state;
    return (
        <div id='flavor-bio-info-box'>
            <h2>{flavorBio.name}</h2>
            <h3>{flavorBio.race.toUpperCase()} : {flavorBio.classes[0].name.toUpperCase()} {flavorBio.classes[0].level}</h3>
            <h4>{flavorBio.height} {flavorBio.weight}</h4>
        </div>
    )
}

export default BioInfo