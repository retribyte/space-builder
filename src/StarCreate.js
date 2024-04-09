// StarCreate.js
import React, { useState } from 'react';

function StarCreate({ handleData }) {
    const [name, setName] = useState('');
    const [mass, setMass] = useState('');
    const [radius, setRadius] = useState('');
    const [temperature, setTemperature] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !mass || !radius || !temperature) {
            alert("Please fill out all required fields.");
            return;
        }

        const nameRegex = /^[a-zA-Z]+$/;
        if (!nameRegex.test(name)) {
            alert("Name can only contain letters.");
            return;
        }

        const numericRegex = /^\d+$/;
        if (!numericRegex.test(mass) || !numericRegex.test(radius) || !numericRegex.test(temperature)) {
            alert("Mass, radius, and temperature must contain only numbers.");
            return;
        }

        const numericValue = parseInt(mass);
        if (numericValue < 1 || numericValue > 100000) {
            alert("Mass must be in the range of 1 - 100000.");
            return;
        }

        const formData = {
            name: name,
            mass: mass,
            radius: radius,
            temperature: temperature
        };

        handleData(formData);

        setName('');
        setMass('');
        setRadius('');
        setTemperature('');
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
                        placeholder="Sun" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div id="inputContainer">
                    <label htmlFor="mass-input">Mass: </label>
                    <input 
                        type="number" 
                        id="mass-input" 
                        className="form-control" 
                        placeholder="1" 
                        min="1" 
                        max="100000" 
                        value={mass} 
                        onChange={(e) => setMass(e.target.value)} 
                        required 
                    />
                    <span className="unit">kg</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="radius-input">Radius: </label>
                    <input 
                        type="number" 
                        id="radius-input" 
                        className="form-control" 
                        placeholder="1" 
                        min="1" 
                        max="100000" 
                        value={radius} 
                        onChange={(e) => setRadius(e.target.value)} 
                        required 
                    />
                    <span className="unit">km</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="temperature-input">Surface Temperature: </label>
                    <input 
                        type="number" 
                        id="temperature-input" 
                        className="form-control" 
                        placeholder="1" 
                        min="1" 
                        max="100000" 
                        value={temperature} 
                        onChange={(e) => setTemperature(e.target.value)} 
                        required 
                    />
                    <span className="unit">K</span>
                </div>
            </div>
            <hr />
            <button id="confirmButton" type="submit" className="btn btn-primary">Confirm</button>
        </form>
    );
}

export default StarCreate;
