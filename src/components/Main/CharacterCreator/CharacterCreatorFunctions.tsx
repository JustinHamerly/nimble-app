export const handleStatIncrease = (statType: 'string') => {
    // increase given stat

    // conditionally increase str and dex saves

    // check if stat type is a WILL type and if so check and update Will

    // update appropriate skills
}

export const handleStatDecrease =  (statType: 'string') => {
    // decrease given stat

    // conditionally decrease str and dex

    // check if stat type is a WILL type and if so check and update Will

    // update appropriate skills
}

export const checkAndUpdateWillSave = () => {
    // check which stat is currently being used for will and its current value [stat, value]
    // check which will stat is highest in stats [stat, value]
    // if current and new are different:
    // 1. find difference of values
    // 2. if current < highest increase will stat by difference and change stat name to highest type
    // 3. if current > highest decrease will stat by abs(difference) and change stat name to highest type
}

