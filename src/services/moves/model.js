export const moveModel = (name, imageRoute, kills, id = 0) => {
    return {
        id,
        name,
        imageRoute,
        kills
    }
}

export const simpleMove = (name, image_route) => {
    return {
        name,
        image_route
    }
}

export const moveKiller = (id_killer, id_killed) => {
    return {
        id_killer,
        id_killed
    }
}
