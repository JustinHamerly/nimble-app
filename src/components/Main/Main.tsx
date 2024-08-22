import React from "react";
import './Main.css'

import CharacterSheet from "./CharacterSheet/CharacterSheet";
import SelectedCharacterProvider from "../../context/SelectedCharacterContext";
import CharacterCreatorPanel from "./CharacterCreator/CharacterCreatorPanel";
import AbilitiesProvider from "../../context/AbilitiesContext";
// import DiceBox from "./DiceBox/DiceBox";
// import DiceRollerContextProvider from "../../context/DiceRollerContext";
// import DiceDisplay from "./DiceBox/DiceDisplay";

function Main() {
    return (
        <SelectedCharacterProvider>
            <AbilitiesProvider>
            {/* <DiceRollerContextProvider> */}
                <main>
                    <CharacterCreatorPanel />
                    <CharacterSheet />
                    {/* <DiceBox />
                    <DiceDisplay /> */}
                </main>
            {/* </DiceRollerContextProvider> */}
            </AbilitiesProvider>
        </SelectedCharacterProvider>
    )
}

export default Main