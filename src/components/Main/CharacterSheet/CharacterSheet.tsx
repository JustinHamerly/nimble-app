import React from "react";
import './CharacterSheet.css'
import Skills from "./Skills/Skills";
import Stats from "./Stats/Stats";
import Saves from "./Saves/Saves";
import BioInfo from "./CharacterInfo/BioInfo";
import SecondaryStats from "./SecondaryStats/SecondaryStats";
import AbilityDisplay from "./AbilityDisplay/AbilityDisplay";

function CharacterSheet() {
    return (
        <div className="char-sheet">
            <BioInfo />
            <div id="health-and-secondary">
                <SecondaryStats />
            </div>
            <div id="stats-and-saves">
                <Stats />
                <Saves />
            </div>
            <div id="skills-health-secondary">
                <Skills />
            </div>
            <AbilityDisplay />
        </div>
    )
}

export default CharacterSheet