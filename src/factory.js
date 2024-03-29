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

export default { createStar, createPlanet, createMoon };