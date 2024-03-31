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

    let G = 6.67 * 10**-11
    let mass = calcMass(planetData);


    return( G * (mass / ((planetData.size/2) ** 2)));
};

export function calcDayLength (planetData) {
    return (planetData.size / 6371);
}

export function calcYearLength (planetData) {
    return ((planetData.distance / 1) * 365)
}