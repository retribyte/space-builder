import React from "react";

function PlanetCreate({ handleData }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = document.getElementById('name-input').value;
        const size = document.getElementById('size-input').value;
        const distance = document.getElementById('distance-input').value;
        const type = document.getElementById('planetType').value;

        const formData = [
            name,
            size,
            distance,
            type
        ];

        console.log('Pulling hand grenade...')
        handleData(formData);
    }

    return (
        <form id="createForm" onSubmit={handleSubmit}>
            <div id="inputContainer">
                <label htmlFor="planetmoon">What object?</label>
                <select id="planetmoon" className="form-select" disabled>
                    <option value="planet">Planet</option>
                    <option value="moon">Moon</option>
                </select>
            </div>
            <hr />
            <div id="objectDetails">
                <div id="inputContainer">
                    <label htmlFor="name-input">Name: </label>
                    <input type="text" id="name-input" className="form-control" placeholder="Earth" />
                </div>
                <div id="inputContainer">
                    <label htmlFor="size-input">Size: </label>
                    <input type="text" id="size-input" className="form-control" placeholder="6000" />
                    <span className="unit">km</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="distance-input">Distance to star: </label>
                    <input type="text" id="distance-input" className="form-control" placeholder="2.53" />
                    <span className="unit">AU</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="type-input">Planet type:</label>
                    <select id="planetType" className="form-select ">
                        <option value="gas">Gas</option>
                        <option value="terrestrial">Terrestrial</option>
                    </select>
                </div>
            </div>
            <hr />
            <button id="confirmButton" className="btn btn-primary">Confirm</button>
        </form>
    );
}

export default PlanetCreate;