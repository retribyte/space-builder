import React, { useEffect } from 'react';
import { starColor } from './calc';

function SystemCanvas(props) {
    const system = props.system;

    const setCanvasSize = (canvas) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    useEffect(() => {
        var canvas = document.getElementById("solar-system-canvas");
        setCanvasSize(canvas);
        
          let GLOBAL_SCALE                  = props.scale;
        const KM_CONVERSION_FACTOR_STAR     = 1 / 20000;    // Radius:   10000 km = 1px
        const KM_CONVERSION_FACTOR_OTHER    = 1 / 1000;     // Radius:    1000 km = 1px
        const AU_CONVERSION_FACTOR          = 150;          // Distance:   150 km = 1px
        const BASE_CONVERT_MULTIPLIER       = 1 / Math.log(1.25);

        const colors = {
            'terrestrial' : 'brown',
            'gas' : 'violet',
            'ice' : 'cyan'
        }

        // Grab the Canvas context
        // ALWAYS clear it before re-rendering!!!
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Don't remove
        // ctx.scale(GLOBAL_SCALE, GLOBAL_SCALE);

        // console.log("data is", system);

        // Display text if star exists
        if (!system.name || !system.size || !system.temperature) {
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Nothing to display", canvas.width/2, canvas.height/2);
            return;
        }

        // Render star
        ctx.beginPath();
        let starRadius = system.size * KM_CONVERSION_FACTOR_STAR * GLOBAL_SCALE;
        starRadius = starRadius < 10 ? 10 : starRadius;
        const starPivotY = starRadius * 2 * GLOBAL_SCALE + 50;

        ctx.arc(canvas.width/2, starPivotY, starRadius, 0, 2 * Math.PI);
        ctx.fillStyle = starColor(system.temperature);
        ctx.fill();
        
        let fontSize = 16 * GLOBAL_SCALE;
        ctx.font = `bold small-caps ${fontSize}px Arial`;
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(system.name, canvas.width/2, starPivotY + starRadius + 20 * GLOBAL_SCALE);

        // Render planets
        const starOffset = 20 * GLOBAL_SCALE;
        for (const planet of system.planets) {
            // console.log("Rendering planet:", planet.name);
            let drawDistance = (Math.log(planet.distance + 1) * AU_CONVERSION_FACTOR + starOffset) * GLOBAL_SCALE;
            if (drawDistance <= (starRadius + 50)) {
                drawDistance = starRadius + 50 + (drawDistance * 0.1);
            }

            // Draw orbit
            ctx.beginPath()
            ctx.arc(canvas.width/2, starPivotY, drawDistance, 0, 2 * Math.PI);
            ctx.strokeStyle = '#ffffff40';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw planet
            ctx.beginPath();
            let planetRadius = (Math.log(planet.size * KM_CONVERSION_FACTOR_OTHER) * BASE_CONVERT_MULTIPLIER) * GLOBAL_SCALE;
            planetRadius = planetRadius < 5 ? 5 : planetRadius;

            const planetColor  = planet.color ? planet.color : colors[planet.type];

            ctx.arc(canvas.width/2, starPivotY + drawDistance, planetRadius, 0, 2 * Math.PI);
            ctx.fillStyle = planetColor;
            ctx.fill();
        
            ctx.font = `${fontSize * 0.75}px Arial`;
            ctx.fillStyle = "white";
            ctx.fillText(planet.name, canvas.width/2, starPivotY + drawDistance + 30 * GLOBAL_SCALE);

            // Render moons
            let moonOffset = planetRadius;
            let isTopLabel = false;
            for (const moon of planet.moons) {
                isTopLabel = !isTopLabel;

                // console.log("Rendering moon:", moon.name);
                let moonDrawDistance = drawDistance;
                moonOffset += (10 * GLOBAL_SCALE);

                // Draw moon orbit
                ctx.beginPath();
                ctx.arc(canvas.width/2, starPivotY + drawDistance, moonOffset, 0, 2 * Math.PI);
                ctx.strokeStyle = '#ffffff40';
                ctx.lineWidth = 2;
                ctx.stroke();

                // Draw moon
                ctx.beginPath();
                let moonRadius = (Math.log(moon.size * KM_CONVERSION_FACTOR_OTHER) * BASE_CONVERT_MULTIPLIER) * GLOBAL_SCALE;
                moonRadius = moonRadius < 0 ? 1 : moonRadius;
                ctx.arc((canvas.width/2) + moonOffset, starPivotY + drawDistance, moonRadius, 0, 2 * Math.PI);
                ctx.fillStyle = '#aaaacc';
                ctx.fill();
        
                ctx.font = `${fontSize * 0.6}px Arial`;
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText(moon.name, canvas.width/2 + moonOffset, starPivotY + drawDistance + (isTopLabel ? -10 : 10) * GLOBAL_SCALE);

            }
        }
    });

    return (
        <canvas id="solar-system-canvas" width="500" height="500" />
    );
}

export default SystemCanvas;