import React from "react";

function StarCreate({ handleData }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = document.getElementById('name-input').value;
        const temperature = document.getElementById('temperature-input').value;
        const size = document.getElementById('size-input').value;

        const formData = {
            name: name,
            size: size,
            temperature: temperature
        };

        console.log('Pulling hand grenade...');
        console.log(formData);
        handleData(formData);
    }

    return (
        <form id="createForm" onSubmit={handleSubmit}>
            <div id="objectDetails">
                <div id="inputContainer">
                    <label htmlFor="name-input">Name: </label>
                    <input type="text" id="name-input" className="form-control" placeholder="Sol" />
                </div>
                <div id="inputContainer">
                    <label htmlFor="size-input">Size: </label>
                    <input type="text" id="size-input" className="form-control" placeholder="1400000" />
                    <span className="unit">km</span>
                </div>
                <div id="inputContainer">
                    <label htmlFor="temperature-input">Temperature: </label>
                    <input type="text" id="temperature-input" className="form-control" placeholder="5772" />
                    <span className="unit">K</span>
                </div>
            </div>
            <hr />
            <button id="confirmButton" className="btn btn-primary">Confirm</button>
        </form>
    );
}

export default StarCreate;