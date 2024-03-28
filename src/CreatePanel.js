import React, { useState } from 'react';
import PlanetCreate from './PlanetCreate';
import MoonCreate from './MoonCreate';
import model from './model';

function CreatePanel({selected, callback}) {
    const [selectedType, setSelectedType] = useState('planet'); // Defaults to planet
    const [formData, setFormData] = useState();

    const handleSubmit = (event) => {
        console.log("Submit button clicked.");
        if (!selected) {
            console.error("Nothing is selected!");
        }
        callback([selectedType, selected, ...formData]);
    }

    const handleTabSwitch = (event) => {
        setSelectedType(event.target.textContent.toLowerCase());
        console.log(event.target.textContent.toLowerCase());
        event.target.className += "selected";
    }

    return (
        <section id="create-panel" className="col-md-2 px-0 text-light">
            <div id="create-panel-content" className="collapse-horizontal">
                <h1>Create</h1>
                <div>
                    <nav className='tab-selector'>
                        <ul>
                            <li><a onClick={handleTabSwitch}>Planet</a></li>
                            <li><a onClick={handleTabSwitch}>Moon</a></li>
                        </ul>
                    </nav>
                    { selectedType === 'planet' && <PlanetCreate handleData={(data) => {setFormData(data)}} /> }
                    { selectedType === 'moon' && <MoonCreate handleData={(data) => {setFormData(data)}} /> }
                </div>
            </div>
        </section>
    );
}

export default CreatePanel;
