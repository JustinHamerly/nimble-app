import React from "react";
import './CharacterSheet.css'
import Skills from "./Skills/Skills";
import Stats from "./StatsAndSaves/Stats";
import Saves from "./saves/Saves";
import BioInfo from "./CharacterInfo/BioInfo";

function CharacterSheet () {
    return (
        <div className="char-sheet">
            <BioInfo />
            <Stats />
            <Saves />
            <Skills />
        </div>
    )
}

export default CharacterSheet