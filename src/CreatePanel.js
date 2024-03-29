import React, { useState } from 'react';
import PlanetCreate from './PlanetCreate';
import MoonCreate from './MoonCreate';
import model from './factory';

function CreatePanel({data, selected, callback}) {
    const [selectedType, setSelectedType] = useState('planet'); // Defaults to planet
    const [formData, setFormData] = useState();

    const handleTabSwitch = (event) => {
        setSelectedType(event.target.textContent.toLowerCase());
        console.log(event.target.textContent.toLowerCase());
        event.target.className += "selected";
    }

    const handleData = (formData) => {
        console.log(formData);
        console.log('Pulling bigger hand grenade...');
        
        let primary;
        if (selectedType == 'planet') {
            // TEMP:
            primary = data.systems[0];
            callback([selectedType, primary.name, ...formData]);
        } else if (selectedType == 'moon') {
            primary = formData[0];
            callback([selectedType, ...formData]);
        }
    };

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
                    { selectedType === 'planet' && <PlanetCreate handleData={handleData} /> }
                    { selectedType === 'moon' && <MoonCreate planets={data.systems[0].planets} handleData={handleData} /> }
                </div>
            </div>
        </section>
    );
}

export default CreatePanel;
