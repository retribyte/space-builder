// System for creating and retrieving information about Stars, Planets, and Moons
import React, { useState } from 'react';
import galaxy from './sample.json';

function createPlanet(name, size, distance, type) {
    let planet = {
        name: name,
        size: size,
        distance: distance,
        type: type,
        moons: [],
        addMoon: function (name, size, distance) {
            this.moons.push(createMoon(name, size, distance));
        }
    }
    return planet;
}

function createMoon(name, size, distance) {
    let moon = {
        name: name,
        size: size,
        distance: distance
    }
    return moon;
}

function createStar(name, size) {
    let star = {
        name: name,
        size: size,
        planets: [],
        addPlanet: function (name, size, distance, type) {
            this.planets.push(createPlanet(name, size, distance, type));
        }
    }
    return star;
}

function addPlanetToStar(starName, name, size, distance, type) {
    const star = galaxy.systems.find(system => system.name === starName);
    if (!star) {
        console.error('Star does not exist!');
        return;
    }
    star.planets.push(createPlanet(name, size, distance, type));
}

function addMoonToPlanet(planetName, name, size, distance) {
    const planet = galaxy.systems
        .flatMap(system => system.planets)
        .find(planet => planet.name === planetName);

    if (!planet) {
        console.error('Planet does not exist!');
        return;
    }
    planet.moons.push(createMoon(name, size, distance));
}

function test() {
    // Example of how this would be used
    let sol = createStar('Sol', 696340);
    sol.addPlanet('Earth', 6371, 1, 'Terrestrial');
    console.log(sol)
    sol.planets.forEach((planet) => {
        console.log(sol.name + " had a planet named " + planet.name)
    })

    let earth = sol.planets[0];
    console.log(earth);

    console.log("Adding planets...")
    earth.addMoon('Luna', 1737, 0.002569);
    earth.addMoon('Cupid', 925, 0.001352);
    earth.addMoon('Labumba', 5184, 0.006128);
    console.log(earth);
    earth.moons.forEach((moon) => {
        console.log(earth.name + " had a moon named " + moon.name)
    })

    // console.log(createPlanet('Earth', 6371, 1, 'Terrestrial'));
    // console.log(createMoon('Luna', 1737, 0.002569));
    // console.log(createStar('Sol', 696340));

    let galaxy = {
        name: 'Milky Way',
        type: 'spiral',
        systems: []
    }
    galaxy.systems.push(sol)
    console.log(JSON.stringify(galaxy));
}