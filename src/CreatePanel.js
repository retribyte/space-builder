import React, { useState } from 'react';
import StarCreate from './StarCreate';
import PlanetCreate from './PlanetCreate';
import MoonCreate from './MoonCreate';
import model from './factory';

function CreatePanel({ data, selected, callback }) {
    const [selectedType, setSelectedType] = useState('star'); // Defaults to star
    const [formData, setFormData] = useState();
    const [starCreated, setStarCreated] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false); 

    const handleTabSwitch = (event) => {
        if (!starCreated || event.target.textContent.toLowerCase() === 'star') {
            return;
        }
        setSelectedType(event.target.textContent.toLowerCase());
        console.log(event.target.textContent.toLowerCase() + " tab clicked");
        const children = event.target.parentElement.parentElement.children;
        for (let i = 0; i < children.length; i++) {
            console.log(children[i].querySelector('a'))
            children[i].querySelector('a').classList.remove("selected");
        }
        event.target.classList.add("selected");
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
            primary = data.systems[0];
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
        <section id="create-panel" className="col-md-2 px-0 text-light">
            <button className="btn btn-outline-primary" type="button" onClick={() => setIsPanelOpen(!isPanelOpen)}>Create</button>
            <div id="create-panel-content" className={`collapse ${isPanelOpen ? 'show' : ''}`}>
                <h1>Create</h1>
                <div>
                    <nav className='tab-selector'>
                        <ul>
                            <li id="tab-star"><a className="selected" onClick={handleTabSwitch}>Star</a></li>
                            <li id="tab-planet"><a onClick={handleTabSwitch}>Planet</a></li>
                            <li id="tab-moon"><a onClick={handleTabSwitch}>Moon</a></li>
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
