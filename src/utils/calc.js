export default{calcMass, calcGravity, calcDayLength, calcYearLength};

export function calcMass (planetData) {
    let area = planetData.size / 7926;
    let mass = area + (5.97219 * (10 ** 24));


    console.log(mass);

    if (planetData.type === "Gas") {
        mass = mass * 0.1237837838;
    }
    // mass = mass.toFixed(2);
    return (mass);
};

export function calcGravity (planetData) {
let gravity = 0;
gravity = (planetData.size / 7926) * 9.8;

if (planetData.type === "Gas") {
    gravity = gravity * 0.1237837838;
}
// gravity = gravity.toFixed(5);
return (gravity);
};

export function calcDayLength (planetData) {
    let day = planetData.size / 6371;
    return (day);
}

export function calcYearLength (planetData) {
    let year = (planetData.distance / 1) * 365;
    // year = year.toFixed(5);

    return (year)
}

export function possLife(sunTemp, planetData) {
    let possOfLife = -1;
    let planetTemp = (sunTemp / 25) * 1 / (planetData.distance) ** 2;
    let HeatChance = (planetTemp / 288 ) * .5;
    let gravityChance = (calcGravity(planetData) / 9.807) * .5;
    
    // Editor's note: `toFixed()` returns a string. I don't know who wrote this, but please do not use it for calculations.
    // gravityChance = gravityChance.toFixed(2);
    // HeatChance = HeatChance.toFixed(2);

    
    if (planetData.type === "Gas") {
        possOfLife = possOfLife - .35;
    }

    else if (gravityChance > .5 || HeatChance > .5) {
        possOfLife = 0;
    }
    else {
        possOfLife = gravityChance + HeatChance;
    };
    
    return possOfLife * 100;
}

export function starColor(temperature) {
    // Stupidly complicated function to pick star color...
    let red, green, blue;

    // Normalize temperature to 0-1 for the algorithm
    const normalizedTemp = (temperature - 3500) / (10000 - 3500);

    if (temperature < 6600) {
        // Enhance red for cooler stars
        red = 255;
        green = 750 * normalizedTemp;   // Magic numbers galore
        blue = 50 + 180 * normalizedTemp;
    } else {
        // For hotter stars, reduce red and green to make blue more prominent
        red = 255 * (1 - (normalizedTemp - 0.5) * 2);
        green = 255 * (1 - normalizedTemp);
        blue = 255;
    }

    // Clamp values to within [0, 255]
    red = Math.min(255, Math.max(0, Math.round(red)));
    green = Math.min(255, Math.max(0, Math.round(green)));
    blue = Math.min(255, Math.max(0, Math.round(blue)));

    // Return RGB color
    return `rgb(${red}, ${green}, ${blue})`;
}

export function possLife2(sunTemp, planetData) {
    let possOfLife = -1;
    let AU = 150000000;
    let planetTemp = sunTemp / ((planetData.distance * AU)**2);
    let HeatChance = (planetTemp / 288 ) * .5;
    let gravityChance = (calcGravity(planetData) / 9.807) * .5;

    if (HeatChance > .5 || gravityChance > .5 || planetData.type === "Gas") {
        possOfLife = 0;
    }
    else {
        possOfLife = HeatChance + gravityChance;
    }

    return possOfLife;
}