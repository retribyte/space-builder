// System for creating and retrieving information about Stars, Planets, and Moons

function createPlanet(name, size, distance, type) {
    let planet = {
        name: name,
        size: size,
        distance: distance,
        type: type,
        moons: []
    }
    // Do something to 'save' this data
    // ...
    // Return a copy of planet
    return JSON.parse(JSON.stringify(planet));
}