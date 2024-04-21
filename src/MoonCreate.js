import React, { useState } from 'react';

function MoonCreate({ planets, handleData }) {
    const [primary, setPrimary] = useState('');
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [distance, setDistance] = useState('');
    const [type, setType] = useState('terrestrial');

    const handleSubmit = (event) => {
        event.preventDefault();

        const primary = document.getElementById('planet-selector').value;
        const name = document.getElementById('name-input').value;
        const size = document.getElementById('size-input').value;
        const distance = document.getElementById('distance-input').value;
        const type = document.getElementById('planetType').value;

        if (!name || !size || !distance) {
            alert('Please fill out all required fields.');
            return;
        }

        const nameRegex = /^[a-zA-Z]+$/;
        // if (!nameRegex.test(name)) {
        //     alert('Name can only contain letters.');
        //     return;
        // }

        const numericRegex = /^\d+$/;
        if (!numericRegex.test(size) || !numericRegex.test(distance)) {
            alert('Size and distance must contain only numbers.');
            return;
        }

        const numericValue = parseInt(size);
        if (numericValue < 1) {
            alert("Size must be greater than 1.");
            return;
        }

        const formData = {
            primary: primary,
            name: name,
            size: size,
            distance: distance,
            objectCompositionType: type
        };

        handleData(formData);

        // Clear input fields after submission
        setName('');
        setSize('');
        setDistance('');
        setType('terrestrial');
    };

    return (
        <form id="createForm" onSubmit={handleSubmit}>
            <div id="inputContainer">
                <label htmlFor="planet-selector">To which planet?</label>
                <select id="planet-selector" className="form-select"
                    onChange={(e) => setPrimary(e.target.value)}>
                    {planets.map((planet) => (
                        <option key={planet.name} value={planet.name}>{planet.name}</option>
                    ))}
                </select>
            </div>
            <hr />
            <div id="objectDetails">
                <div id="inputContainer">
                    <label htmlFor="name-input">Name: </label>
                    <input 
                        type="text" 
                        id="name-input" 
                        className="form-control" 
                        placeholder="Europa" 
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
                        placeholder="6000" 
                        min="1" 
                        max="100000" 
                        value={size} 
                        onChange={(e) => setSize(e.target.value)} 
                        required 
                    />
                    <span className="unit">km</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="distance-input">Distance to planet:</label>
                    <input 
                        type="number" 
                        id="distance-input" 
                        className="form-control" 
                        placeholder="2.53" 
                        value={distance} 
                        onChange={(e) => setDistance(e.target.value)} 
                        required 
                    />
                    <span className="unit">km</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="planetType">Moon type:</label>
                    <select id="planetType" className="form-select"
                        onChange={(e) => setType(e.target.value)}>
                        <option value="terrestrial">Terrestrial</option>
                        <option value="gas">Gas</option>
                        <option value="ice">Ice</option>
                    </select>
                </div>
            </div>
            <hr />
            <button id="confirmButton" type="submit" className="btn btn-primary">Confirm</button>
        </form>
    );
}

export default MoonCreate;
