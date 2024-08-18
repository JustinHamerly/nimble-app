interface RaceAbility {
    name: string;
    description: string;
}

interface Race {
    name: string;
    size: string;
    description: string;
    ability: RaceAbility;
}

type RaceInfoType = Record<string, Race>

export const raceInfo: RaceInfoType = {

    human: {
        name: 'HUMAN',
        size: 'MEDIUM',
        description: `Found in every terrain and environment, their curiosity and ambition drive them 
to explore and adapt. Their curiosity and ambition drive them to every corner of 
the world, making them a ubiquitous and versatile race.`,
        ability: {
            name: 'Adaptable',
            description: '+1 to all skills. +1 to Initiative.'
        }
    },

    elf: {
        name: 'ELF',
        size: 'MEDIUM',
        description: `Elves epitomize swiftness & grace, their tall slender forms belie their innate speed, 
grace, and wit. Formidable in both diplomacy and combat. Elves strike swiftly, 
often preventing the worst by acting first.`,
        ability: {
            name: 'Swiftness & Grace',
            description: '+3 to Initiative.'
        }
    },

    dwarf: {
        name: 'DWARF',
        size: 'MEDIUM',
        description: ` Dwarf, in the old language means stone. You are resilient, solid, stout. Even when 
driven to exhaustion, you will not falter. Forgoing speed, you are gifted with 
physical vitality, and a belly that can handle the finest and worst consumables this 
world has to offer.`,
        ability: {
            name: 'Stout',
            description: '+2 max Hit Dice,  +1 max Exhaustion, -5ft. Speed.'
        }
    },

    halfling: {
        name: 'HALFLING',
        size: 'SMALL',
        description: ` Kind of like a human, but smaller (except for the feet). Where does our luck 
come from? Well...you know what they say about rabbits? We’ve got feet for days 
compared to them. Imagine the amount of luck you could fit into these bad boys!`,
        ability: {
            name: 'Lucky',
            description: `Whenever you would fail a save, you can choose to succeed instead. 1/
            Long Rest.`
        }
    }
}

