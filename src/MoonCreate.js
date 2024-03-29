import React from "react";

function MoonCreate({ planets, handleData }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const primary = document.getElementById('planet-selector').value;
        const name = document.getElementById('name-input').value;
        const size = document.getElementById('size-input').value;
        const distance = document.getElementById('distance-input').value;
        const type = document.getElementById('planetType').value;

        const formData = {
            primary: primary,
            name: name,
            size: size,
            distance: distance,
            objectCompositionType: type
        };

        console.log('Pulling hand grenade...')
        handleData(formData);
    }

    return (
        <form id="createForm" onSubmit={handleSubmit}>
            <div id="inputContainer">
                <label htmlFor="planet-selector">To which planet?</label>
                <select id="planet-selector" className="form-select">
                    {
                        planets.map( (planet) => {
                            return (
                                <option key={planet.name} value={planet.name}>{planet.name}</option>
                            );
                        })
                    }
                </select>
            </div>
            <hr />
            <div id="objectDetails">
                <div id="inputContainer">
                    <label htmlFor="name-input">Name: </label>
                    <input type="text" id="name-input" className="form-control" placeholder="Europa" />
                </div>
                <div id="inputContainer">
                    <label htmlFor="size-input">Size: </label>
                    <input type="text" id="size-input" className="form-control" placeholder="6000" />
                    <span className="unit">km</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="distance-input">Distance to planet:</label>
                    <input type="text" id="distance-input" className="form-control" placeholder="2.53" />
                    <span className="unit">km</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="planetType">Moon type:</label>
                    <select id="planetType" className="form-select">
                        <option value="terrestrial">Terrestrial</option>
                    </select>
                </div>
            </div>
            <hr />
            <button id="confirmButton" className="btn btn-primary">Confirm</button>
        </form>
    );
}

export default MoonCreate;