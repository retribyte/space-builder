// System for creating and retrieving information about Stars, Planets, and Moons
import React, { useState } from 'react';
import galaxy from './sample.json';

function createPlanet(name, size, distance, type) {
    let planet = {
        name: name,
        size: Number(size),
        distance: Number(distance),
        type: type,
        moons: []
    }
    return planet;
}

function createMoon(name, size, distance, type) {
    let moon = {
        name: name,
        size: Number(size),
        distance: Number(distance),
        type: type
    }
    return moon;
}

function createStar(name, size, temperature) {
    let star = {
        name: name,
        size: Number(size),
        temperature: temperature,
        planets: []
    }
    return star;
}

function addPlanetToStar(setState, starName, name, size, distance, type) {
    setState(galaxyBefore => {
        const updatedSystems = galaxyBefore.systems.map(system => {
            // Check if this is the right star
            if (system.name === starName) {
                // Found the star, now add the new planet to its planets array
                return {
                    ...system,
                    planets: [...system.planets, createPlanet(name, size, distance, type)]
                };
            }
            // Not it! Return the unmodified system...
            return system;
        });

        return { ...galaxyBefore, systems: updatedSystems };
    });
    console.log(galaxy);
};

function addMoonToPlanet(setState, planetName, name, size, distance, type) {
    setState(galaxyBefore => {
        const updatedSystems = galaxyBefore.systems.map(system => {
            // Check if this is the right planet
            const updatedPlanets = system.planets.map(planet => {
                if (planet.name === planetName) {
                    // Found the planet, now add the new moon to its moons array
                    return {
                        ...planet,
                        moons: [...planet.moons, createMoon(name, size, distance, type)]
                    };
                }
                // Not it! Return the unmodified planet...
                return planet;
            });

            return { ...system, planets: updatedPlanets };
        });

        return { ...galaxyBefore, systems: updatedSystems };
    });
};

function findObject(node, key) {
    // Check if this node is the object I want
    if (node.name === key) {
        return node;
    }

    // If node is object, look at properties & call recursive func
    if (typeof node === 'object' && node !== null) {
        for (let prop in node) {
            if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
                const result = findObject(node[prop], key);
                if (result) {
                    return result;
                }
            }
        }
    }

    // If node is object, iterate through elements
    if (Array.isArray(node)) {
        for (let i = 0; i < node.length; i++) {
            const result = findObject(node[i], key);
            if (result) {
                return result;
            }
        }
    }

    // If object not found, return null
    return null;
}


export default { createStar, createPlanet, createMoon, addPlanetToStar, addMoonToPlanet, findObject };