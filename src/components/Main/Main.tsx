import React from "react";
import './Main.css'

import CharacterSheet from "./CharacterSheet/CharacterSheet";
import SelectedCharacterProvider from "../../context/SelectedCharacterContext";
// import DiceBox from "./DiceBox/DiceBox";
// import DiceRollerContextProvider from "../../context/DiceRollerContext";
// import DiceDisplay from "./DiceBox/DiceDisplay";

function Main() {
    return (
        <SelectedCharacterProvider>
            {/* <DiceRollerContextProvider> */}
                <main>
                    <CharacterSheet />
                    {/* <DiceBox />
                    <DiceDisplay /> */}
                </main>
            {/* </DiceRollerContextProvider> */}
        </SelectedCharacterProvider>
    )
}

export default Main