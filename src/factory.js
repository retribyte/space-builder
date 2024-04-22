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
    setState((systemBefore) => {
        // console.log("System before:", systemBefore);
        // Found the star, now add the new planet to its planets array
        return {
            ...systemBefore,
            planets: [
                ...systemBefore.planets,
                createPlanet(name, size, distance, type)
            ]
        };
    });
    // console.log("System after:", system);
};

function addMoonToPlanet(setState, planetName, name, size, distance, type) {
    setState(systemBefore => {
        // Map through all planets
        const updatedPlanets = systemBefore.planets.map(planet => {
            // Check if this is the right planet
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

        // Return the updated system with the modified planets array
        return { ...systemBefore, planets: updatedPlanets };
    });
};

function addSystemToGalaxy(setState, system, xPos, yPos) {
    setState(galaxyBefore => {
        return {
            ...galaxyBefore,
            systems: [...galaxyBefore.systems, {
                ...system,
                xPos: xPos,
                yPos: yPos
            }]
        };
    });
}

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


export default { createStar, createPlanet, createMoon, addPlanetToStar, addMoonToPlanet, addSystemToGalaxy, findObject };