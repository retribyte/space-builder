import React, { useState, useEffect } from 'react';
import { starColor } from './calc';

function GalaxyCanvas(props) {

    const { galaxy, selected } = props;
    const [empty, setEmpty] = useState(false);

    const setCanvasSize = (canvas) => {
        canvas.width = window.innerHeight;
        canvas.height = window.innerHeight;
    }

    useEffect(() => {
        var canvas = document.getElementById("galaxy-canvas");
        setCanvasSize(canvas);
        
          let GLOBAL_SCALE                  = props.scale;
        const KM_CONVERSION_FACTOR_STAR     = 1 / 20000;    // Radius:   10000 km = 1px
        const KM_CONVERSION_FACTOR_OTHER    = 1 / 1000;     // Radius:    1000 km = 1px
        const AU_CONVERSION_FACTOR          = 150;          // Distance:   150 km = 1px
        const BASE_CONVERT_MULTIPLIER       = 1 / Math.log(1.25);

        const colors = {
            'system' : {
                fill: '#ffcc00',
                stroke: '#bb6600',
            },
            'landmark' : {
                fill: '#0088ff',
                stroke: '#0044bb'
            },
        }

        // Grab the Canvas context
        // ALWAYS clear it before re-rendering!!!
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Don't remove
        // ctx.scale(GLOBAL_SCALE, GLOBAL_SCALE);

        console.log("data is", galaxy);

        // Display text if data exists
        if (!galaxy.systems || !galaxy.landmarks) {
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            // ctx.fillText("Nothing to display", canvas.width/2, canvas.height/2);
            // setEmpty(true);
            return;
        }
        else {
            // setEmpty(false);
        }

        // Render the background image
        // ctx.drawImage('assets/img/galaxy.jpg', canvas.width/2, canvas.width/2, canvas.height, canvas.height);

        // Render the systems
        for (const system of galaxy.systems) {
            ctx.beginPath();
            ctx.arc(system.xPos, system.yPos, 10, 0, 2 * Math.PI);
            ctx.fillStyle = colors.system.fill;
            ctx.fill();
            ctx.strokeStyle = colors.system.stroke;
            ctx.lineWidth = 3;
            ctx.stroke();
        }
        for (const landmark of galaxy.landmarks) {
            ctx.beginPath();
            ctx.arc(landmark.xPos, landmark.yPos, 10, 0, 2 * Math.PI);
            ctx.fillStyle = colors.landmark.fill;
            ctx.fill();
            ctx.strokeStyle = colors.landmark.stroke;
            ctx.stroke();
        }
    });

    return (
        <canvas id="galaxy-canvas" className={empty ? 'empty' : ''} width="500" height="500" />
    );
}

export default GalaxyCanvas;