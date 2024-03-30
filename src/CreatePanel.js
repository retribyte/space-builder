import React, { useState } from 'react';
import StarCreate from './StarCreate';
import PlanetCreate from './PlanetCreate';
import MoonCreate from './MoonCreate';
import model from './factory';

function CreatePanel({data, selected, callback}) {
    const [selectedType, setSelectedType] = useState('star'); // Defaults to star
    const [formData, setFormData] = useState();
    const [starCreated, setStarCreated] = useState(false);

    const handleTabSwitch = (event) => {
        if (!starCreated                                        // If there's no star...
            || event.target.textContent.toLowerCase() == 'star' // ...or star is already selected...
            || data.systems[0].planets.length == 0              // ...or there's no planets...
        ) {
            return;
        }
        setSelectedType(event.target.textContent.toLowerCase());
        console.log(event.target.textContent.toLowerCase() + " tab clicked");
    }

    const handleData = (formData) => {
        console.log(formData);
        console.log("selected type is " + selectedType);
        console.log('Pulling bigger hand grenade...');
        
        let primary;
        if (selectedType == 'star') {
            setStarCreated(true);
            callback({
                kind: selectedType,
                primary: undefined,
                ...formData
            });
            setSelectedType('planet');
            document.querySelector('li#tab-star > a').classList.remove('selected');
            document.querySelector('li#tab-planet > a').classList.add('selected');
        }
        else if (selectedType == 'planet') {
            // TEMP:
            primary = data.systems[0];
            callback({
                kind: selectedType,
                primary: primary.name,
                ...formData
            });
        } else if (selectedType == 'moon') {
            primary = formData[0];
            callback({
                kind: selectedType, 
                ...formData
            });
        }
    };

    return (
        <section id="create-panel" className="col-md-2 px-0 text-light">
            <div id="create-panel-content" className="collapse-horizontal">
                <h1>Create</h1>
                <div>
                    <nav className='tab-selector'>
                        <ul>
                            <li id="tab-star">
                                <a className={`${selectedType === 'star' ? 'selected' : ''} ${starCreated ? 'disabled' : ''}`} onClick={handleTabSwitch}>
                                    Star
                                </a>
                            </li>
                            <li id="tab-planet">
                                <a className={`${selectedType === 'planet' ? 'selected' : ''} ${!starCreated ? 'disabled' : ''}`} onClick={handleTabSwitch}>
                                    Planet
                                </a>
                            </li>
                            <li id="tab-moon">
                                <a className={`${selectedType === 'moon' ? 'selected' : ''} ${!starCreated ? 'disabled' : ''} ${!data.systems[0] || data.systems[0].planets.length == 0 ? 'disabled' : ''}`} onClick={handleTabSwitch}>
                                    Moon
                                </a>
                            </li>
                        </ul>
                    </nav>
                    { selectedType === 'star' && <StarCreate handleData={handleData} /> }
                    { selectedType === 'planet' && <PlanetCreate handleData={handleData} /> }
                    { selectedType === 'moon' && <MoonCreate planets={data.systems[0].planets} handleData={handleData} /> }
                </div>
            </div>
        </section>
    );
}

export default CreatePanel;
