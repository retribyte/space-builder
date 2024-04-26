import React, { useState, useEffect } from 'react';
import StarCreate from './StarCreate';
import PlanetCreate from './PlanetCreate';
import MoonCreate from './MoonCreate';
import InfoPanel from './InfoPanel';

function CreatePanel({ data, callback, collapsed }) {
    const [selectedType, setSelectedType] = useState('star'); // Defaults to star
    const [starCreated, setStarCreated] = useState(data.name != "");

    useEffect(() => {
        if (!data.name) {
            setSelectedType('star');
            setStarCreated(false);
        }
        else {
            setStarCreated(true);
        }
    });

    useEffect(() => {
        setSelectedType('planet');
    }, []);

    const handleTabSwitch = (event) => {
        if (!starCreated                                        // If there's no star...
            || event.target.textContent.toLowerCase() == 'star' // ...or star is already selected...
            || data.planets.length == 0                         // ...or there's no planets...
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
        if (selectedType === 'star') {
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
        else if (selectedType === 'planet') {
            // TEMP:
            primary = data;
            callback({
                kind: selectedType,
                primary: primary.name,
                ...formData
            });
        } else if (selectedType === 'moon') {
            primary = formData[0];
            callback({
                kind: selectedType, 
                ...formData
            });
        }
    };

    return (
        <section id="create-panel" className="col-md-2 px-0 text-light" style={{ transform: collapsed ? 'translateX(-100%)' : 'translateX(0)' }}>
            <div className="d-flex flex-column">
                <div id="create-panel-content">
                    <h1>Create</h1>
                        <nav className='tab-selector system'>
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
                                    <a className={`${selectedType === 'moon' ? 'selected' : ''} ${!starCreated ? 'disabled' : ''} ${!data.planets || data.planets.length == 0 ? 'disabled' : ''}`} onClick={handleTabSwitch}>
                                        Moon
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <p className='bold'>Enter the details of your {selectedType}:</p>
                        { selectedType === 'star' && <StarCreate handleData={handleData} /> }
                        { selectedType === 'planet' && <PlanetCreate handleData={handleData} /> }
                        { selectedType === 'moon' && <MoonCreate planets={data.planets} handleData={handleData} /> }
                </div>
                
            </div>
        </section>
    );
}

export default CreatePanel;