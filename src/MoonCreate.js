import React from "react";

function MoonCreate({ handleData }) {
    return (
        <form id="createForm">
            <div id="inputContainer">
                <label htmlFor="planetmoon">What object?</label>
                <select id="planetmoon" className="form-select">
                    <option value="planet">Planet</option>
                    <option value="moon">Moon</option>
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
                    <label htmlFor="distance-input">Moon type:</label>
                    <select id="planetType" className="form-select ">
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