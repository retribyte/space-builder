import React, { useState } from 'react';

function PlanetCreate({ handleData }) {
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [distance, setDistance] = useState('');
    const [type, setType] = useState('gas');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !size || !distance) {
            alert("Please fill out all required fields.");
            return;
        }

        const nameRegex = /^[a-zA-Z]+$/;
        // if (!nameRegex.test(name)) {
        //     alert("Name can only contain letters.");
        //     return;
        // }

        const numericRegex = /^\d+\.?\d+$/;
        if (!numericRegex.test(size) || !numericRegex.test(distance)) {
            alert("Size and distance must contain only numbers.");
            return;
        }

        const numericValue = parseInt(size);
        if (numericValue < 1) {
            alert("Size must be greater than 1.");
            return;
        }

        const formData = {
            name: name,
            size: size,
            distance: distance,
            objectCompositionType: type
        };

        handleData(formData);

        setName('');
        setSize('');
        setDistance('');
        setType('gas');
    }

    return (
        <form id="createForm" onSubmit={handleSubmit}>
            <div id="objectDetails">
                <div id="inputContainer">
                    <label htmlFor="name-input">Name: </label>
                    <input 
                        type="text" 
                        id="name-input" 
                        className="form-control" 
                        placeholder="Earth" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div id="inputContainer">
                    <label htmlFor="size-input">Size: </label>
                    <input 
                        type="number" 
                        id="size-input" 
                        className="form-control" 
                        placeholder="6371" 
                        min="1"
                        step={0.01}
                        value={size} 
                        onChange={(e) => setSize(e.target.value)} 
                        required 
                    />
                    <span className="unit">km</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="distance-input">Distance to star: </label>
                    <input 
                        type="number" 
                        id="distance-input" 
                        className="form-control" 
                        placeholder="1" 
                        min="1"
                        step={0.01}
                        value={distance} 
                        onChange={(e) => setDistance(e.target.value)} 
                        required 
                    />
                    <span className="unit">AU</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="type-input">Planet type:</label>
                    <select id="planetType" className="form-select" 
                        onChange={(e) => setType(e.target.value)} >
                    <option value="gas">Gas</option>
                    <option value="terrestrial">Terrestrial</option>
                    <option value="ice">Ice</option>
                </select>
                </div>
            </div>
            <hr />
            <button id="confirmButton" type="submit" className="btn btn-primary">Confirm</button>
        </form>
    );
}

export default PlanetCreate;