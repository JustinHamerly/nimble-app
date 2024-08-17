import { RollInfo } from "../components/tools/interfaces"

const getCharActions = () => {
    const addToModifier = (section: string, key:string, amount: number, prevInfo: RollInfo) => {
        return {section: section, key: key, rollInfo:{
            ...prevInfo,
            modifier: prevInfo.modifier + amount
        }}
    }

    const subtractFromModifier = (section: string, key:string, amount: number, prevInfo: RollInfo) => {
        return {section: section, key: key, rollInfo:{
            ...prevInfo,
            modifier: prevInfo.modifier - amount
        }}
    }

    const addAdvantageLevel = (section: string, key: string, amount: number, prevInfo: RollInfo) => {
        return { section: section, key: key, rollInfo: {
            ...prevInfo,
            advantages: prevInfo.advantages ? prevInfo.advantages + amount : amount
        }}
    }

    const subtractAdvantageLevel = (section: string, key: string, amount: number, prevInfo: RollInfo) => {
        if (!prevInfo.advantages) {
            return {section: section, key: key, rollInfo: prevInfo}
        }

        if (amount > prevInfo.advantages) {
            const newInfo = prevInfo;
            delete newInfo.advantages;
            return {section: section, key: key, rollInfo: newInfo}
        }

        return {section: section, key: key, rollInfo: {
            ...prevInfo,
            advantages: prevInfo.advantages - amount
        }}
    }

    const addDisadvantageLevel = (section: string, key: string, amount: number, prevInfo: RollInfo) => {
        return { section: section, key: key, rollInfo: {
            ...prevInfo,
            disadvantages: prevInfo.disadvantages ? prevInfo.disadvantages + amount : amount
        }}
    }

    const subtractDisadvantageLevel = (section: string, key: string, amount: number, prevInfo: RollInfo) => {
        if (!prevInfo.disadvantages) {
            return {section: section, key: key, rollInfo: prevInfo}
        }

        if (amount > prevInfo.disadvantages) {
            const newInfo = prevInfo;
            delete newInfo.disadvantages;
            return {section: section, key: key, rollInfo: newInfo}
        }

        return {section: section, key: key, rollInfo: {
            ...prevInfo,
            advantages: prevInfo.disadvantages - amount
        }}
    }

    return {
        addToModifier,
        subtractFromModifier,
        addAdvantageLevel,
        subtractAdvantageLevel,
        addDisadvantageLevel,
        subtractDisadvantageLevel
    }
}

export {getCharActions}
