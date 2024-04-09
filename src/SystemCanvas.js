import React, { useEffect } from 'react';

function SystemCanvas(props) {

    useEffect(() => {
        var canvas = document.getElementById("solar-system-canvas");
        const width = canvas.width;
        const height = canvas.height;
        const KM_CONVERSION_FACTOR_STAR = 1/10000;  // Radius:   10000 km = 1px
        const KM_CONVERSION_FACTOR_MISC = 1/1000;   // Radius:    1000 km = 1px
        const AU_CONVERSION_FACTOR = 50;            // Distance:    50 km = 1px

        // Grab the Canvas context
        // ALWAYS clear it before re-rendering!!!
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height); // Don't remove

        console.log("data is", props.system);

        if (!props.system.name) {
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Nothing to display", width/2, height/2);
        } else {
            ctx.beginPath();
            ctx.arc(width/2, height/2, props.system.size * KM_CONVERSION_FACTOR_STAR, 0, 2 * Math.PI);
            ctx.strokeStyle = "orange";
            ctx.strokeWidth = "5px";
            ctx.stroke();
            ctx.fillStyle = "yellow";
            ctx.fill();
        }
    }, []);

    return (
        <canvas id="solar-system-canvas" width="500" height="500">

        </canvas>
    );
}

export default SystemCanvas;