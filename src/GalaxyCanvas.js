import React, { useEffect } from 'react';
import { starColor } from './calc';

function GalaxyCanvas(props) {
    // This component will expect two props:
    // - galaxy: An object containing the galaxy data
    // - selected: The currently selected object
    // - scale: The scale of the canvas
    // I have hardcoded the galaxy data for now, but it should be passed ('galaxy' and 'setGalaxy') in from App.js

    const system = {
        name: "Sol",
        size: 696340,
        temperature: 5772,
        x: 486,
        y: 510,
        planets: [
        { name: "Mercury", size: 2440, distance: 0.39, type: 'terrestrial', moons: [] },
        { name: "Venus", size: 6052, distance: 0.72, type: 'terrestrial', moons: [] },
        {
            name: "Earth", size: 6371, distance: 1, type: 'terrestrial', moons: [
            { name: "Luna", size: 1737, distance: 384500, type: 'terrestrial' }
            ]
        },
        {
            name: "Mars", size: 3389, distance: 1.52, type: 'terrestrial', moons: [
            { name: "Phobos", size: 22, distance: 9377, type: 'terrestrial' },
            { name: "Deimos", size: 12, distance: 23460, type: 'terrestrial' }
            ]
        },
        {
            name: "Jupiter", size: 69911, distance: 5.20, type: 'gas', moons: [
            { name: "Io", size: 1821, distance: 421700, type: 'terrestrial' },
            { name: "Europa", size: 1561, distance: 670900, type: 'terrestrial' }
            ]
        },
        {
            name: "Saturn", size: 58232, distance: 9.58, type: 'gas', moons: [
            { name: "Titan", size: 5149, distance: 1221870, type: 'terrestrial' },
            { name: "Enceladus", size: 504, distance: 238020, type: 'terrestrial' }
            ]
        },
        { name: "Uranus", size: 25362, distance: 19.22, type: 'ice', moons: [
            { name: "Titania", size: 1578, distance: 435910, type: 'terrestrial' },
            { name: "Oberon", size: 1523, distance: 583520, type: 'terrestrial' }
        ] },
        { name: "Neptune", size: 24622, distance: 30.05, type: 'ice', moons: [
            { name: "Triton", size: 2707, distance: 354800, type: 'terrestrial' },
            { name: "Nereid", size: 340, distance: 5513813, type: 'terrestrial' }
        ] }
        ]
    };
    const galaxy = {
        systems: [
            system
        ],
        landmarks: [
            { name: 'Space Station 13', description: 'A space station in the middle of nowhere', x: 100, y: 100 }
        ]
    }

    const setCanvasSize = (canvas) => {
        canvas.width = window.innerHeight;
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
        if (galaxy.systems.length == 0 || galaxy.landmarks.length == 0) {
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Nothing to display", canvas.width/2, canvas.height/2);
            return;
        }

        // Render the background image
        // ctx.drawImage('assets/img/galaxy.jpg', canvas.width/2, canvas.width/2, canvas.height, canvas.height);

        // Render the systems
        for (const system of galaxy.systems) {
            ctx.beginPath();
            ctx.arc(system.x, system.y, 10, 0, 2 * Math.PI);
            ctx.fillStyle = colors.system.fill;
            ctx.fill();
            ctx.strokeStyle = colors.system.stroke;
            ctx.lineWidth = 3;
            ctx.stroke();
        }
        for (const landmark of galaxy.landmarks) {
            ctx.beginPath();
            ctx.arc(landmark.x, landmark.y, 10, 0, 2 * Math.PI);
            ctx.fillStyle = colors.landmark.fill;
            ctx.fill();
            ctx.strokeStyle = colors.landmark.stroke;
            ctx.stroke();
        }
    });

    return (
        <canvas id="solar-system-canvas" width="500" height="500">

        </canvas>
    );
}

export default GalaxyCanvas;