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

        const numericRegex = /^\d+\.?\d*$/;
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
        <form id="createForm" className='moon-form' onSubmit={handleSubmit}>
            <div id="objectDetails">
                <div className='label-holder'>
                    <label htmlFor="planet-selector">To which planet?</label>
                    <label htmlFor="name-input">Name: </label>
                    <label htmlFor="size-input">Radius: </label>
                    <label htmlFor="distance-input">Distance to planet:</label>
                    <label htmlFor="planetType">Moon type:</label>
                </div>
                <div id="inputContainer">
                    <select id="planet-selector" className="form-select"
                        onChange={(e) => setPrimary(e.target.value)}>
                        {planets.map((planet) => (
                            <option key={planet.name} value={planet.name}>{planet.name}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        id="name-input"
                        className="form-control"
                        placeholder="ex. Europa"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        id="size-input"
                        className="form-control"
                        placeholder="ex. 1561"
                        min="1"
                        step={0.01}
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        id="distance-input"
                        className="form-control"
                        placeholder="ex. 384400"
                        step={0.01}
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        required
                    />
                    <select id="planetType" className="form-select"
                        onChange={(e) => setType(e.target.value)}>
                        <option value="terrestrial">Terrestrial</option>
                        <option value="gas">Gas</option>
                        <option value="ice">Ice</option>
                    </select>
                </div>
                <div className='unit-holder'>
                    <span></span>
                    <span></span>
                    <span className="unit">km</span>
                    <span className="unit">km</span>
                    <span></span>
                </div>
            </div>
            <hr />
            <button id="confirmButton" type="submit" className="btn btn-primary">Confirm</button>
        </form>
    );
}

export default MoonCreate;
