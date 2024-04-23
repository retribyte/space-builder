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

        const numericRegex = /^\d+\.?\d+$/;
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
                    <label htmlFor="size-input">Size: </label>
                    <input 
                        type="number" 
                        id="size-input" 
                        className="form-control" 
                        placeholder="1" 
                        min="1"
                        step={0.01}
                        value={size} 
                        onChange={(e) => setSize(e.target.value)} 
                        required 
                    />
                    <span className="unit">kg</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="temperature-input">Surface Temperature: </label>
                    <input 
                        type="number" 
                        id="temperature-input" 
                        className="form-control" 
                        placeholder="1" 
                        min="1"
                        step={0.01}
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
