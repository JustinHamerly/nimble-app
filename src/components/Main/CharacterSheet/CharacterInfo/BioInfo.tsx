import React, { useContext } from "react";
import './BioInfo.css'
import { SelectedCharacterContext } from "../../../../context/SelectedCharacterContext";

function BioInfo () {
    const charContext = useContext(SelectedCharacterContext);
    if (!charContext) return null;

    const {flavorBio} = charContext.state;
    return (
        <div id='flavor-bio-info-box'>
            {flavorBio.name ? <h2> {flavorBio.name} </h2> : null}
            {flavorBio.classes[0].name ? <h3>{flavorBio.race ? flavorBio.race.toUpperCase(): null} {(flavorBio.classes[0].name.toUpperCase() + ' ' + flavorBio.classes[0].level)}</h3> : null}
            <h4>{flavorBio.height} {flavorBio.weight}</h4>
        </div>
    )
}

export default BioInfo