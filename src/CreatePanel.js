import React from 'react';

function CreatePanel() {
    return (
        <section id="create-panel" className="col-md-2 px-0 text-light">
            <div id="create-panel-content" className="collapse-horizontal">
                <h1>Create</h1>
                <form id="inputFieldsContainer">
                    <div id="inputContainer">
                        <label htmlFor="planetmoon">What object?</label>
                        <select id="planetmoon" className="form-select">
                            <option value="planet">Planet</option>
                            <option value="moon">Moon</option>
                        </select>
                    </div>
                    <hr />
                    <div id="inputContainer">
                        <label htmlFor="name-input">Name: </label>
                        <input type="text" id="name-input" className="form-control" placeholder="Earth" />
                    </div>
                    <div id="inputContainer">
                        <label htmlFor="size-input">Size: </label>
                        <input type="text" id="size-input" className="form-control" placeholder="6000" />
                        <span className="unit">km</span>
                    </div>
                    <div id="inputContainer">
                        <label htmlFor="distance-input">Primary distance:</label>
                        <input type="text" id="distance-input" className="form-control" placeholder="2.53" />
                        <span className="unit">AU</span>
                    </div>
                    <div id="inputContainer">
                        <label htmlFor="distance-input">Planet type:</label>
                        <select id="planetType" className="form-select ">
                            <option value="gas">Gas</option>
                            <option value="terrestrial">Terrestrial</option>
                        </select>
                    </div>
                    <hr />
                </form>
                <button id="confirmButton" className="btn btn-primary">Confirm</button>
            </div>
        </section>
    );
}

export default CreatePanel;
