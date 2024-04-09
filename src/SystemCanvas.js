import React, { useEffect } from 'react';

function SystemCanvas(props) {
    const system = props.system;

    useEffect(() => {
        var canvas = document.getElementById("solar-system-canvas");
        const width = canvas.width;
        const height = canvas.height;
        const KM_CONVERSION_FACTOR_STAR = 1/20000;  // Radius:   10000 km = 1px
        const KM_CONVERSION_FACTOR_OTHER = 1/1000;  // Radius:    1000 km = 1px
        const AU_CONVERSION_FACTOR = 100;            // Distance:    50 km = 1px

        // Grab the Canvas context
        // ALWAYS clear it before re-rendering!!!
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height); // Don't remove

        console.log("data is", system);

        // Display text if star exists
        if (!system.name) {
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Nothing to display", width/2, height/2);
            return;
        }

        // Render star
        ctx.beginPath();
        const starRadius = system.size * KM_CONVERSION_FACTOR_STAR;
        ctx.arc(width/2, starRadius + 10, starRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillStyle = "yellow";
        ctx.fill();

        // Render planets
        const starOffset = starRadius * 2 + 20;
        for (const planet of system.planets) {
            console.log("Rendering planet:", planet.name);
            let drawDistance = planet.distance * AU_CONVERSION_FACTOR + starOffset;

            ctx.beginPath();
            const planetRadius = planet.size * KM_CONVERSION_FACTOR_OTHER;
            const planetColor  = planet.type == 'terrestrial' ? 'brown' : 'cyan';

            ctx.arc(width/2, drawDistance, planetRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = planetColor;
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.fillStyle = planetColor;
            ctx.fill();
        }
    });

    return (
        <canvas id="solar-system-canvas" width="500" height="500" style={{border: "5px solid white"}}>

        </canvas>
    );
}

export default SystemCanvas;