import React from "react";
import './CharacterSheet.css'
import Skills from "./Skills/Skills";
import Stats from "./Stats/Stats";
import Saves from "./Saves/Saves";
import BioInfo from "./CharacterInfo/BioInfo";
import HealthTracker from "./HealthTracker/HeathTracker";
import SecondaryStats from "./SecondaryStats/SecondaryStats";

function CharacterSheet () {
    return (
        <div className="char-sheet">
            <BioInfo />
            <div id="stats-and-saves">
                <Stats />
                <Saves />
            </div>
            <div id="skills-health-secondary">
                <Skills />
                <div id ="health-and-secondary">
                    <HealthTracker />
                    <SecondaryStats />
                </div>
            </div>
        </div>
    )
}

export default CharacterSheet