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

function createLandmark(name, description) {
    let landmark = {
        name: name,
        description: description,
    }
    return landmark;
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
        // Map through existing systems to check for a name match
        const updatedSystems = galaxyBefore.systems.map(existingSystem => {
            if (existingSystem.name === system.name) {
                // If the name matches, return a new object with updated coordinates
                return {
                    ...system,
                    xPos: xPos,
                    yPos: yPos
                };
            } else {
                // If no match, return the system as is
                return existingSystem;
            }
        });

        // Check if the system was updated or if it's new
        const isExistingSystem = galaxyBefore.systems.some(existingSystem => existingSystem.name === system.name);

        return {
            ...galaxyBefore,
            systems: isExistingSystem ? updatedSystems : [...updatedSystems, { ...system, xPos, yPos }]
        };
    });
}

function deleteSystemFromGalaxy(setState, systemName) {
    setState(galaxyBefore => {
        // Filter out the system with the matching name
        const filteredSystems = galaxyBefore.systems.filter(system => system.name !== systemName);

        // Return the updated galaxy state without the deleted system
        return {
            ...galaxyBefore,
            systems: filteredSystems
        };
    });
}

function deletePlanet(setState, planetName) {
    setState((systemBefore) => ({
        ...systemBefore,
        planets: systemBefore.planets.filter(planet => planet.name !== planetName)
    }));
}

function deleteMoon(setState, moonName) {
    setState((systemBefore) => ({
        ...systemBefore,
        planets: systemBefore.planets.map((planet) => ({
                ...planet,
                moons: planet.moons ? planet.moons.filter(moon => moon.name !== moonName) : []
        }))
    }));
}

function addLandmarkToGalaxy(setState, landmark, xPos, yPos) {
    setState(galaxyBefore => {
        return {
            ...galaxyBefore,
            landmarks: [
                ...galaxyBefore.landmarks,
                { // New landmark
                    ...landmark,
                    xPos: xPos,
                    yPos: yPos
                }
            ]
        }
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

function findParentPlanet(system, moonName) {
    for (const planet of system.planets) {
        if (planet.moons) {
            for (const moon of planet.moons) {
                if (moon.name === moonName) {
                    return planet;
                }
            }
        }
    }
    // Not found
    return null;
}


export default {
    createStar,
    createPlanet,
    createMoon,
    addPlanetToStar,
    addMoonToPlanet,
    addSystemToGalaxy,
    findObject,
    findParentPlanet,
    createLandmark,
    addLandmarkToGalaxy,
    deleteSystemFromGalaxy,
    deletePlanet,
    deleteMoon
};