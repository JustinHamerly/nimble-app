import React, { createContext, useState, ReactNode } from "react";

type DiceRollerContextType = {
    setAdvantages: (advantages: number) => void;
    setDisadvantages: (disadvantages: number) => void;
    setDiceType: (dice: number) => void;
    setDiceAmount: (quantity: number) => void;
    setModifier: (modifier: number) => void;
    updateDiceRoll: (diceType: number, diceAmount?: number, modifier?: number, advantages?: number, disadvantages?: number) => void;
    rollDice: () => void;
    reset: () => void;
    advantages: number;
    disadvantages: number;
    diceType: number;
    modifier: number;
    diceAmount: number;
    rolledDice: number[];
    removedDice: number[];
    diceResults: number[];
    diceResultTotal: number;
};

export const DiceRollerContext = createContext<DiceRollerContextType | undefined>(undefined);

const validDiceValues = [4, 6, 8, 10, 12, 20, 100];

interface DiceRollerProviderProps {
    children: ReactNode;
}

const DiceRollerContextProvider: React.FC<DiceRollerProviderProps> = ({ children }) => {
    const [advantages, setAdvantages] = useState(0);
    const [disadvantages, setDisadvantages] = useState(0);
    const [diceType, setDiceType] = useState(20);
    const [modifier, setModifier] = useState(0);
    const [diceAmount, setDiceAmount] = useState(1);
    const [rolledDice, setRolledDice] = useState<number[]>([]);
    const [removedDice, setRemovedDice] = useState<number[]>([]);
    const [diceResults, setDiceResults] = useState<number[]>([]);
    const [diceResultTotal, setDiceResultTotal] = useState<number>(0);

    const rollSingleDice = (diceType: number): number => Math.floor(Math.random() * diceType) + 1;

    const removeExtremeValues = (diceRolls: number[], numToRemove: number, findLowest: boolean): number[] => {
        const removed = [];
        for (let i = 0; i < numToRemove; i++) {
            let extremeIndex = 0;
            for (let j = 1; j < diceRolls.length; j++) {
                if ((findLowest && diceRolls[j] < diceRolls[extremeIndex]) || (!findLowest && diceRolls[j] > diceRolls[extremeIndex])) {
                    extremeIndex = j;
                }
            }
            removed.push(...diceRolls.splice(extremeIndex, 1));
        }
        return removed;
    };

    const calculateTotal = (diceArray: number[], modifier: number): number =>
        diceArray.reduce((acc, curr) => acc + curr, 0) + modifier;

    const reset = () => {
        setAdvantages(0);
        setDisadvantages(0);
        setDiceType(20);
        setModifier(0);
        setDiceAmount(1);
        setRolledDice([]);
        setRemovedDice([]);
        setDiceResults([]);
        setDiceResultTotal(0);
    };

    const updateDiceRoll = (
        diceType: number,
        amount: number = 1,
        modifier: number = 0,
        adv: number = 0,
        dis: number = 0,
    ) => {
        setDiceType(diceType);
        setModifier(prev => prev+modifier);
        setAdvantages(prev=>prev+adv);
        setDisadvantages(prev=>prev+dis);
        setDiceAmount(amount);
    }

    const rollDice = (
        
    ) => {
        if (!validDiceValues.includes(diceType)) return;

        const rollCount = Math.abs(advantages - disadvantages) + diceAmount;
        const allDiceRolls = Array.from({ length: rollCount }, () => rollSingleDice(diceType));

        setRolledDice(allDiceRolls);

        const numToRemove = Math.abs(advantages - disadvantages);
        const filteredRolls = numToRemove > 0 ? removeExtremeValues([...allDiceRolls], numToRemove, advantages < disadvantages) : allDiceRolls;

        setRemovedDice(allDiceRolls.filter((roll, index) => filteredRolls.includes(roll) && !allDiceRolls.slice(0, index).includes(roll)));
        setDiceResults(filteredRolls);
        setDiceResultTotal(calculateTotal(filteredRolls, modifier));
    };

    return (
        <DiceRollerContext.Provider value={{
            setAdvantages,
            setDisadvantages,
            setDiceType,
            setModifier,
            setDiceAmount,
            rollDice,
            updateDiceRoll,
            reset,
            advantages,
            disadvantages,
            diceType,
            modifier,
            diceAmount,
            rolledDice,
            removedDice,
            diceResults,
            diceResultTotal
        }}>
            {children}
        </DiceRollerContext.Provider>
    );
};

export default DiceRollerContextProvider;