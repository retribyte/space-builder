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

        const numericRegex = /^\d+\.?\d*$/;
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
        <form id="createForm" className='planet-form' onSubmit={handleSubmit}>
            <div id="objectDetails">
                <div className='label-holder'>
                    <label htmlFor="name-input">Name: </label>
                    <label htmlFor="size-input">Size: </label>
                    <label htmlFor="distance-input">Distance to star: </label>
                    <label htmlFor="type-input">Planet type:</label>
                    {/* <label htmlFor="color-input">Color:</label> */}
                </div>
                <div id="inputContainer">
                    <input 
                        type="text" 
                        id="name-input" 
                        className="form-control" 
                        placeholder="Earth" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
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
                    <select id="planetType" className="form-select" 
                        onChange={(e) => setType(e.target.value)} >
                        <option value="gas">Gas</option>
                        <option value="terrestrial">Terrestrial</option>
                        <option value="ice">Ice</option>
                    </select>
                    {/* <input
                        type='color'
                        id='color-input'
                        className='form-control'
                        defaultValue='#3333ff'
                    /> */}
                </div>
                <div className='unit-holder'>
                    <span></span>
                    <span className="unit">km</span>
                    <span className="unit">AU</span>
                    <span></span>
                    {/* <span></span> */}
                </div>
            </div>
            <hr />
            <button id="confirmButton" type="submit" className="btn btn-primary">Confirm</button>
        </form>
    );
}

export default PlanetCreate;