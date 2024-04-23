export default{calcMass, calcGravity, calcDayLength, calcYearLength};

export function calcMass (planetData) {
    let volume = .75 * 3.14 * ((planetData.size/2) ** 3);
    let density = 0;
    let earthMass = 5.97219 * (10 ** 24);
    if (planetData.type === "Terrestrial") {
        density = 5.55;
    }
    else if (planetData.type ==="Gas") {
        density = .687;
    }
    
    return ((density / volume) / earthMass) ;
};

export function calcGravity (planetData) {

    let mass = calcMass(planetData);
    let earthMass = 5.97219 * (10 ** 24);

    return((mass / earthMass) * 9.807);
};

export function calcDayLength (planetData) {
    return (planetData.size / 6371);
}

export function calcYearLength (planetData) {
    return ((planetData.distance / 1) * 365)
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

export function possLife(sunTemp, planetData) {
    let possOfLife = -1;
    let AU = 150000000;
    let planetTemp = sunTemp / ((planetData.distance * AU)**2);
    let HeatChance = (planetTemp / 288 ) * .5;
    let gravityChance = (calcGravity(data) / 9.807) * .5;

    if (HeatChance > .5 || gravityChance > .5 || planetData.type === "Gas") {
        possOfLife = 0;
    }
    else {
        possOfLife = HeatChance + gravityChance;
    }

    return possOfLife;
}