import React, { useContext } from "react";
import './CharacterSheet.css'
import Skills from "./Skills/Skills";
import { SelectedCharacterContext } from "../../../context/SelectedCharacterContext";
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