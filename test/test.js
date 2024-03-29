
let data = {
'name':"noName", 
'size':6000, 
'distance':1.2, 
'type':"T", 
'dayLength':0,
'yearLength':0,
'mass':0,
'gravity':0,
};

function calcMass(data) {
    let volume = .75 * 3.14 * ((data.size/2) ** 3);
    let density = 0;
    if (data.type === "T") {
        density = 5.55;
    }
    else if (data.type ==="G") {
        density = .687;
    }
    
    return ((density / volume) * 10000) ;
};

function calcGravity(data) {
    let G = 6.67 * 10**-11

    return( G * (data.mass / ((data.size/2) ** 2)));
};

function calcDayLength(data) {
    C = 2 * 3.14 * (data.size / 2);
    return (C / 10000)
}

function calcYearLength(data) {
    return (data.distance * 365);
}


data.mass = calcMass(data);
data.gravity =calcGravity(data);
data.dayLength = calcDayLength(data);
data.yearLength = calcYearLength(data);

console.log(data);


