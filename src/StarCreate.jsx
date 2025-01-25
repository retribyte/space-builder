// StarCreate.js
import React, { useState } from 'react';

function StarCreate({ handleData }) {
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [temperature, setTemperature] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !size || !temperature) {
            alert("Please fill out all required fields.");
            return;
        }

        // const nameRegex = /^[a-zA-Z]+$/;
        // if (!nameRegex.test(name)) {
        //     alert("Name can only contain letters.");
        //     return;
        // }

        const numericRegex = /^\d+\.?\d*$/;
        if (!numericRegex.test(size) || !numericRegex.test(temperature)) {
            alert("Size and temperature must contain only numbers.");
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
            temperature: temperature
        };

        handleData(formData);

        setName('');
        setSize('');
        setTemperature('');
    }

    return (
        <form id="createForm" className='star-form' onSubmit={handleSubmit}>
            <div id="objectDetails">
                <div className='label-holder'>
                    <label htmlFor="name-input">Name: </label>
                    <label htmlFor="size-input">Radius: </label>
                    <label htmlFor="temperature-input">Temperature: </label>
                </div>
                <div id="inputContainer">
                    <input 
                        type="text" 
                        id="name-input" 
                        className="form-control" 
                        placeholder="ex. Sol" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="number" 
                        id="size-input" 
                        className="form-control" 
                        placeholder="ex. 696340" 
                        min="1"
                        step={0.01}
                        value={size} 
                        onChange={(e) => setSize(e.target.value)} 
                        required 
                    />
                    <input 
                        type="number" 
                        id="temperature-input" 
                        className="form-control" 
                        placeholder="ex. 5772" 
                        min="1"
                        step={0.01}
                        value={temperature} 
                        onChange={(e) => setTemperature(e.target.value)} 
                        required 
                    />
                </div>
                <div className='unit-holder'>
                    <span></span>
                    <span className="unit">km</span>
                    <span className="unit">K</span>
                </div>
            </div>
            <hr />
            <button id="confirmButton" type="submit" className="btn btn-primary">Confirm</button>
        </form>
    );
}

export default StarCreate;
