import React from "react";
import './CharacterSheet.css'
import Skills from "./Skills/Skills";
import Stats from "./StatsAndSaves/Stats";
import Saves from "./saves/Saves";

function CharacterSheet () {
    return (
        <div className="char-sheet">
            <h1>Character Sheet</h1>
            <Stats />
            <Saves />
            <Skills />
        </div>
    )
}

export default CharacterSheet