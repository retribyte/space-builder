import React, { useState } from 'react';
import PlanetCreate from './PlanetCreate';
import MoonCreate from './MoonCreate';
import model from './model';

function CreatePanel() {
    const [selectedObject, setSelectedObject] = useState('planet'); // Defaults to planet
    const handleSelectionChange = (event) => {
        setSelectedObject(event.target.value);
    }

    const handleSubmit = (event) => {
        if (selectedObject == 'planet') {
            // Handle planet creation
            // Handle App state change
        } else {
            // Handle moon creation
            // Handle App state change
        }
    }

    return (
        <section id="create-panel" className="col-md-2 px-0 text-light">
            <div id="create-panel-content" className="collapse-horizontal">
                <h1>Create</h1>
                <form id="createForm">
                    <div id="inputContainer">
                        <label htmlFor="planetmoon">What object?</label>
                        <select id="planetmoon" className="form-select" onChange={handleSelectionChange} value={selectedObject}>
                            <option value="planet">Planet</option>
                            <option value="moon">Moon</option>
                        </select>
                    </div>
                    <hr />
                    { selectedObject === 'planet' && <PlanetCreate /> }
                    { selectedObject === 'moon' && <MoonCreate /> }
                    <hr />
                </form>
                <button id="confirmButton" className="btn btn-primary">Confirm</button>
            </div>
        </section>
    );
}

export default CreatePanel;
