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