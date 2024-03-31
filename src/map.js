import React from "react";
import './assets/css/style.css';

function mapPanel(props) {
    return (
        <div id="body-content" className="row align-items-start text-center"> 
        <section id="create-panel" className="col-md-2 h-100 px-0 text-light">
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

        <section id="children-panel" className="col-md-2 h-100 px-0 text-light">
            <div id="children-panel-content" className="collapse-horizontal">
                <h1>Astronomical Objects</h1>
                <nav className="container text-start">
                    <ul className="star">
                        <li>Sol</li>
                            <ul className="planet">
                                <li>Mercury</li>
                                <li>Venus</li>
                                <li>Earth</li>
                                    <ul className="moon"><li>Luna</li></ul>
                                <li>Mars</li>
                                <li>Jupiter</li>
                                <li>Saturn</li>
                                <li>Uranus</li>
                                <li>Neptune</li>
                            </ul>
                    </ul>
                </nav>
            </div>
            
        </section>

        <main className="col px-0 h-100" id="main-column">
            <div className="closebtn left"><a href="javascript:void(0)">&equiv;</a></div>
            <div className="button-left side-button"><button id="create" type="button" className="btn btn-outline-primary">Create</button></div>
            <img className="image" src="./assets/images/bad-solar-system-diagram.avif" alt="Placeholder diagram of the Solar System" />
            <div className="button-right side-button"><button id="save" type="button" className="btn btn-outline-danger">Save</button></div>
            <div className="closebtn right"><a href="javascript:void(0)">&equiv;</a></div>
        </main>

        <info />
    </div>
                    
    );
}