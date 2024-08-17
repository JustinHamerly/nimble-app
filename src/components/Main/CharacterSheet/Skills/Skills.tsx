import React, { useContext } from "react";
import './Skills.css'
import StatBlock from "../StatBlock";
import { SelectedCharacterContext } from "../../../../context/SelectedCharacterContext";


function Skills() {
    const charContext = useContext(SelectedCharacterContext);
    if (!charContext) return null;

    const { state } = charContext;
    const { arcana, examination, influence, insight, lore, might, naturecraft, perception, slightofhand, stealth } = state.skills;
    
    const skillsArray = [arcana, examination, influence, insight, lore, might, naturecraft, perception, slightofhand, stealth]
  
    return (
        <section className="skill-section">
            <h3>SKILLS</h3>
            <div className="skill-list">
                {skillsArray.map((skill, i)=> <StatBlock key={i} rollInfo={skill}/>)}
            </div>
        </section>
    )
}

export default Skills