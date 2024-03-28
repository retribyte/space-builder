import React, { useState } from 'react';
import PlanetCreate from './PlanetCreate';
import MoonCreate from './MoonCreate';
import model from './model';

function CreatePanel({callback, selected}) {
    const [selectedType, setSelectedType] = useState('planet'); // Defaults to planet
    const [formData, setFormData] = useState();

    const handleSelectionChange = (event) => {
        setSelectedType(event.target.value);
    }

    const handleSubmit = (event) => {
        if (!selected) {
            console.error("Nothing is selected!");
        }
        callback([selectedType, selected, ...data]);
    }

    return (
        <section id="create-panel" className="col-md-2 px-0 text-light">
            <div id="create-panel-content" className="collapse-horizontal">
                <h1>Create</h1>
                <form id="createForm">
                    <div id="inputContainer">
                        <label htmlFor="planetmoon">What object?</label>
                        <select id="planetmoon" className="form-select" onChange={handleSelectionChange} value={selectedType}>
                            <option value="planet">Planet</option>
                            <option value="moon">Moon</option>
                        </select>
                    </div>
                    <hr />
                    { selectedType === 'planet' && <PlanetCreate handleData={(data) => {setFormData(data)}} /> }
                    { selectedType === 'moon' && <MoonCreate handleData={(data) => {setFormData(data)}} /> }
                    <hr />
                </form>
                <button 
                    id="confirmButton" 
                    className="btn btn-primary"
                    onClick={handleSubmit}>
                        Confirm
                </button>
            </div>
        </section>
    );
}

export default CreatePanel;
