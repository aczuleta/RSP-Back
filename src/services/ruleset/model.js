export const rulesetModel = (name, moves) => {
    return {
        name,
        moves
    }
}

export const ruleModel = (idRuleset, rulesetName, moves) => {
    return {
        idRuleset,
        rulesetName,
        moves
    }
}